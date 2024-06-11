import { User } from "../../models/user.js";
import { emailSignature } from "./env.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const verifyController = async (req, res) => {
  const { token } = req.query;
  if (!token) {
    return res.status(404).json("invalid request");
  }
  try {
    const decoded = jwt.verify(token, process.env.emailPrivateKey);
    const { email } = decoded;
    const student = await User.findOne({ email });
    student.verified = true;
    await student.save();
    if (!student) return res.status(400).json({ message: "student not found" });
    res
      .status(200)
      .json({ message: `your account has been verified succesfully` });
  } catch (error) {
    return res.status(400).json({ error, message: "invalid token" });
  }
  if (!token) return res.status(400).json({ message: " not token found" });
};

export { verifyController };
