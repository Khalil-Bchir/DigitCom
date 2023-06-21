const Course = require('../Models/Course');

const CourseController = {};

//Create a course
CourseController.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get all courses
CourseController.getCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Get a course
CourseController.getCourse = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Update a course
CourseController.updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json(error);
  }
};

//Delete a course
CourseController.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = CourseController;