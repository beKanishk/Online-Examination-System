
import express from "express";
import { addDepartment, getAllDept } from "../controllers/DepartmentController.js";
const deptRouter = express.Router();
deptRouter.post("/addDepartment",addDepartment);
deptRouter.get("/getAllDept", getAllDept);


export default deptRouter;
