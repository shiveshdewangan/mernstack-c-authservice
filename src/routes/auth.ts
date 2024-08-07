import express from "express";
import AuthControllers from "../controllers/AuthControllers";

const router = express.Router();
const authController = new AuthControllers();

router.post("/register", (req, res) => authController.register(req, res));

export default router;
