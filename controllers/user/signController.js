import jwt from "jsonwebtoken";
import { User } from "../../models/user.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();
const userSignature = process.env.userPrivateKey;
//sign in controller
const signController = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) return res.status(400).send("invalid email or password");

  const result = await bcrypt.compare(req.body.password, user.password);

  if (!result) return res.status(400).send("invalid email or password");

  const token = jwt.sign({ email: user.email, id: user._id }, userSignature);

  res.header("x-auth-token", token).status(202).json({ email: user.email });
};

export { signController };
