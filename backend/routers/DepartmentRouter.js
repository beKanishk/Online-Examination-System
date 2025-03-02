
import express from "express";
import { addDepartment } from "../controllers/DepartmentController.js";
const deptRouter = express.Router();
deptRouter.post("/addDepartment",addDepartment);


export default deptRouter;
