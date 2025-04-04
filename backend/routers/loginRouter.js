import { getUserByEmail, login, Register } from "../controllers/loginController.js";
import express from "express";
const loginRouter = express.Router();
loginRouter.post("/register",Register);
loginRouter.post("/login",login);
loginRouter.get("/getUserByEmail",getUserByEmail);

export default loginRouter;
