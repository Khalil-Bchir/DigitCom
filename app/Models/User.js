//User Model

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter a name'],
        },

        lastname: {
            type: String,
            required: [true, 'Please enter a lastname'],
        },

        email: {
            type: String,
            required: [true, 'Please enter an email'],
            unique: true
        },

        password:{
            type: String,
            required: [true, 'Please enter a password'],
        },
        
        //custom generated function
        userId: {
            type: String,
            required: true,
            unique: true
        },

        userType:{
            type: String,
            enum: ['CON', 'FOR','AD'], // CON as condidat, FOR as Formateur and AD as admin
            required:true
        },

        file:{
            type: String,
            required: false
        }, 

        valid:{
            type: Boolean,
            required: true
        }
    },

    {
        timestamps: true
    }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;