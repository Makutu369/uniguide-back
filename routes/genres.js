import express from "express";
import { Genres } from "../models/genres.js";
import authorise from "../middleware/genresAuth.js";
const router = express.Router();

const genController = async (req, res) => {
  const genres = await Genres.find();
  res.send(genres);
};
router.get("/", authorise, genController);

export default router;
