import express from "express";
const router = express.Router();
import { registerController } from "../controllers/user/registerController.js";
import { signController } from "../controllers/user/signController.js";
import { verifyController } from "../controllers/user/verifyController.js";
router.post("/register", registerController);
router.post("/sign", signController);
router.get("/verifyEmail", verifyController);

export default router;
