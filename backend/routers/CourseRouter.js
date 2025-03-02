import express from "express";
import { addCourse } from "../controllers/CourseController.js";

const courseRouter = express.Router();
courseRouter.post("/addCourse/:department", addCourse);

export default courseRouter;
