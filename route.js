const express=require("express");
const router=express.Router();

const StudentController=require("../Controllers/studentController");
// const CourseController=require("../Controllers/courseController");

router.post("/register",StudentController.createStudent);
//router.post("/register",CourseController.createCourse);

module.exports=router;
