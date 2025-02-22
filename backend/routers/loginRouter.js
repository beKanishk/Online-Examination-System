import { login, Register } from "../controllers/loginController.js";
import express from "express";
const loginRouter = express.Router();
loginRouter.get("/register",Register);
loginRouter.get("/login",login);

export default loginRouter;
