import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import loginRouter from "./routers/loginRouter.js";
import deptRouter from "./routers/DepartmentRouter.js";
import courseRouter from "./routers/CourseRouter.js";
import TeacherRouter from "./routers/TeacherRouter.js";
import questionRouter from "./routers/QuestionsRouter.js";
import ExamRouter from "./routers/ExamRouter.js";

dotenv.config();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/userLogin",loginRouter);
app.use("/department",deptRouter);
app.use("/course",courseRouter);
app.use("/teacher",TeacherRouter);
app.use("/question",questionRouter);
app.use("/exam",ExamRouter);
// app.use("/student",StudentRouter);

app.get("/", (req, res) => {
  res.send("hello, world!");
});

mongoose
  .connect(process.env.CONNECTION_STRING)
  .then(() => {
    console.log("connected to datbase successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`server is running at ${port} at http://localhost:${port}`);
});
