import express from "express";
import controller from "../controllers/AdminController.js";

const router = express.Router();

router.post("/login", controller.login);

export default router;
