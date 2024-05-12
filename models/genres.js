import mongoose from "mongoose";

const Genres = mongoose.model(
  "genres",
  new mongoose.Schema({
    name: String,
    description: String,
  })
);

export { Genres };
