import jwt from "jsonwebtoken";
import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

const signature = "lama";

dotenv.config();
const signController = async (req, res) => {
  //check both email and password
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("invalid email or password");
  const result = await bcrypt.compare(req.body.password, user.password);
  if (!result) return res.status(400).send("invalid email or password");
  const token = jwt.sign({ email: user.email, id: user._id }, signature);
  res.header("x-auth-token", token).status(202).json({ email: user.email });
};

const registerController = async (req, res) => {
  //check if email exists
  const user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).json({ error: "user already exists" });
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(req.body.password, salt);
  const create = new User({
    email: req.body.email,
    password: hash,
  });
  //let user bcrypt to has the password
  create.save();
  res
    .status(200)
    .json({ message: "user created successfully", id: create._id });
};

export { registerController, signController };
