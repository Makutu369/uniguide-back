import mongoose from "mongoose";

const schema = new mongoose.Schema({
  school: String,
  region: String,
});

const Schools = mongoose.model("universities", schema);

export { Schools };
