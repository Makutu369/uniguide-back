import mongoose from "mongoose";

const User = mongoose.model(
  "user",
  new mongoose.Schema({
    email: { required: true, type: String },
    password: String,
    verified: Boolean,
  })
);

export { User };
