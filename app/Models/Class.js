const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  classId: {
    type: String,
    required: true,
  },
  name:{
    type: String,
    required: true,
  },
  former:{
    type: String,
    required: true,
    refer: User,
  },
  condidate:{
    type: String,
    required: true,
    refer: User,
  }
});

const Class = mongoose.model('Course', classSchema);

module.exports = Class;
