import mongoose from "mongoose";

const schema = new mongoose.Schema({
  school: String,
  region: String,
});

const Schools = mongoose.model("Universities", schema);

export { Schools };
