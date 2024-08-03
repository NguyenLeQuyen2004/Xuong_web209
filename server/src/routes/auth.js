import { Router } from "express";
import AuthController from "../controllers/auth.js";

const authRouter = Router();

const authController = new AuthController();

authRouter.post("/login", authController.login);
authRouter.post("/register", authController.register);
authRouter.get("/users", authController.getAllUsers); // Thêm route mới để lấy tất cả người dùng
export default authRouter;
