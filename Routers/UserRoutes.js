const express = require ("express");
const UserController = require('../Controllers/UserController');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const uploadDirectory = path.join(__dirname, '../uploads');

// create uploads directory if it does not exist
if (!fs.existsSync(uploadDirectory)) {
  fs.mkdirSync(uploadDirectory);
}

//upload CV file
const storage = multer.diskStorage({
  destination: (req, file, cb) =>{
    cb(null, uploadDirectory)
  },
  filename: (req, file, cb) =>{
    cb(null, Date.now()+ '--' +file.originalname )
  }
})

const upload = multer({ storage: storage });

router.post('/user',upload.single('file'), UserController.createUser); // Create user 

module.exports = router;
