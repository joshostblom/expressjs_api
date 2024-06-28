import express from "express";
import controller from "../controllers/ResourceController.js";

const router = express.Router();

router.get("/get/resume", controller.getResume);

export default router;
