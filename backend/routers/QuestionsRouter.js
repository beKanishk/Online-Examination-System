import express from "express";
import { addQuestion, getQuestions } from "../controllers/questions.js";

const questionRouter = express.Router();

// Route to add a new question
questionRouter.post("/addQuestion", addQuestion);

// Route to get all questions
questionRouter.get("/getQuestions", getQuestions);

export default questionRouter;
