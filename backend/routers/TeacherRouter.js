// import express from "express";
// import { login, register } from "../controllers/TeacherController.js";

// const TeacherRouter = express.Router();

// TeacherRouter.post("/register", register);
// TeacherRouter.post("/login", login);
// export default TeacherRouter;


import express from "express";
import {
  register,
  login,
  startExam,
  getActiveStudents,
  blockStudent
} from "../controllers/TeacherController.js";

const TeacherRouter = express.Router();

TeacherRouter.post("/register", register);
TeacherRouter.post("/login", login);
TeacherRouter.post("/start-exam", startExam);
TeacherRouter.get("/active-students", getActiveStudents);
TeacherRouter.post("/block-student", blockStudent);

export default TeacherRouter;
