import express from "express";
import controller from "../controllers/ProjectController.js";
import { verifyAccessToken } from "../utility/JWT.js";

const router = express.Router();

router.get("/get", controller.getAll);

router.get("/get/:id", controller.getOne);

router.post("/update", verifyAccessToken, controller.create);

router.post("/update/:id", verifyAccessToken, controller.update);

export default router;
