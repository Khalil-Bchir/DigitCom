const mongoose = require('mongoose');

const ModuleSchema = new mongoose.Schema({
  moduleId: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true,
    unique: true
  },
  nbrHeure: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

const Module = mongoose.model('Module', ModuleSchema);
module.exports = Module;
