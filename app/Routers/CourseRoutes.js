const express = require ("express");

const CourseController = require ('../Controllers/CourseController');

const router = express.Router();

router.post('/Course',CourseController.createCourse); // create a course
router.get('/Course',CourseController.getCourses); // get all courses
router.get('/Course/:id',CourseController.getCourse); // get a course
router.put('/Course/:id',CourseController.updateCourse); // update a course
router.delete('/Course/:id',CourseController.deleteCourse); // delete a course

module.exports = router;
