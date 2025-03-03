import express from "express";
import { login, register } from "../controllers/TeacherController.js";

const TeacherRouter = express.Router();

TeacherRouter.post("/register", register);
TeacherRouter.post("/login", login);
export default TeacherRouter;
