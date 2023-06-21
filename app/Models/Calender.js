const mongoose = require('mongoose');

const calendarEventSchema = new mongoose.Schema({
  candidate: {
    type: String,
    ref: 'User',
    required: true,
  },
  former:{
    type: String,
    ref: 'User',
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true,
  },
  startDateTime: {
    type: Date,
    required: true,
  },
  endDateTime: {
    type: Date,
    required: true,
  },
});

const CalendarEvent = mongoose.model('CalendarEvent', calendarEventSchema);

module.exports = CalendarEvent;
