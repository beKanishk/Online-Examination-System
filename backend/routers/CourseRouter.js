import express from "express";
import { addCourse, getAllCourses } from "../controllers/CourseController.js";

const courseRouter = express.Router();
courseRouter.post("/addCourse/:department", addCourse);
courseRouter.get("/getAllCourse", getAllCourses);

export default courseRouter;
