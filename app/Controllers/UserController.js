const User = require ('../Models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const UserController = {};

//generate userId
function generateCustomId(year, type, index) {
    const indexStr = index.toString().padStart(3, '0');
    const customId = `${year}${type}${indexStr}`;
    return customId;
  };


// Create user
UserController.createUser = async (req, res) => {
  try {
    // Check if email already exists
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // Get the current year as a 2-digit string (e.g. "21" for 2021)
    const year = new Date().getFullYear().toString().slice(-2);

    // Get the number of existing users of the same userType
    const count = await User.countDocuments({ userType: req.body.userType });

    // Generate a custom ID for the new user
    const customId = generateCustomId(year, req.body.userType, count + 1);

    // Create a new user
    const { filename } = req.file;
    const newUser = new User({
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashedPassword,
      userId: customId,
      userType: req.body.userType,
      file : filename
    });

    const savedUser = await newUser.save();

    res.status(201).json({ savedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = UserController;