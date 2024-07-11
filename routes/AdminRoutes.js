import express from "express";
import controller from "../controllers/AdminController.js";

const router = express.Router();

router.post("/login", controller.login);

router.get("/refresh", controller.refresh);

export default router;
