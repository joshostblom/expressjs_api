import express from "express";
import controller from "../controllers/ProjectController.js";
import { verifyToken } from "../utility/JWT.js";

const router = express.Router();

router.get("/get", controller.getAll);

router.get("/get/:id", controller.getOne);

router.post("/update", verifyToken, controller.create);

router.post("/update/:id", verifyToken, controller.update);

export default router;
