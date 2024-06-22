import express from "express";
import controller from "../controllers/ProjectController.js";

const router = express.Router();

router.get("/get", controller.getAll);

router.get("/get/:id", controller.getOne);

router.post("/update", controller.create);

router.post("/update/:id", controller.update);

export default router;
