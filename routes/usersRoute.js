import express from "express";
const router = express.Router();
import {
  registerController,
  signController,
} from "../controllers/userController.js";
router.post("/register", registerController);
router.post("/sign", signController);


export default router;
