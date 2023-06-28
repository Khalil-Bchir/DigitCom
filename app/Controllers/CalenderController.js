const CalendarEvent = require('../Models/calendarEvent');
const User = require('../Models/User');
const Course = require('../Models/Course');

const CalendarController = {};

// Create a new calendar event
CalendarController.createCalendarEvent = async (req, res) => {
    try {
        const { formerId } = req.params;
        const { course, startDateTime, endDateTime } = req.body;
        
        // Create a new calendar event
        const calendarEvent = new CalendarEvent({
            former: formerId,
            course,
            startDateTime,
            endDateTime,
        });
        
        // Save the calendar event to the database
        const savedCalendarEvent = await calendarEvent.save();
        
        res.status(201).json(savedCalendarEvent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Get all calendar events for a candidate
CalendarController.getAllCalendarEvents = async (req, res) => {
  try {
    const { candidateId } = req.params;

    // Fetch calendar events associated with the candidate
    const calendarEvents = await CalendarEvent.find({ candidate: candidateId });

    res.json(calendarEvents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get a calendar event by ID

CalendarController.getCalendarEventById = async (req, res) => {
  try {
    const { eventId } = req.params;

    // Find the calendar event by ID
    const calendarEvent = await CalendarEvent.findById(eventId);

    if (!calendarEvent) {
      return res.status(404).json({ message: 'Calendar event not found' });
    }

    res.json(calendarEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Update a calendar event
CalendarController.updateCalendarEvent = async (req, res) => {
  try {
    const { eventId } = req.params;
    const { course, startDateTime, endDateTime } = req.body;

    // Find the calendar event by ID and update its details
    const updatedCalendarEvent = await CalendarEvent.findByIdAndUpdate(
      eventId,
      { course, startDateTime, endDateTime },
      { new: true }
    );

    if (!updatedCalendarEvent) {
      return res.status(404).json({ message: 'Calendar event not found' });
    }

    res.json(updatedCalendarEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Delete a calendar event
CalendarController.deleteCalendarEvent = async (req, res) => {
  try {
    const { eventId } = req.params;

    // Find the calendar event by ID and delete it
    const deletedCalendarEvent = await CalendarEvent.findByIdAndDelete(eventId);

    if (!deletedCalendarEvent) {
      return res.status(404).json({ message: 'Calendar event not found' });
    }

    res.json(deletedCalendarEvent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = CalendarController;