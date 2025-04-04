import express from 'express';
import { createExam, getQuestionsBySubject } from '../controllers/ExamController.js';

const ExamRouter = express.Router();

ExamRouter.post('/create', createExam);
ExamRouter.get('/questions/:subject', getQuestionsBySubject);

export default ExamRouter;