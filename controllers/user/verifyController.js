import { User } from "../../models/user.js";
import { emailSignature } from "./env.js";
import jwt from "jsonwebtoken";

const verifyController = async (req, res) => {
  const loginLink = "http://localhost:5172/Login";
  const { token } = req.query;
  const decoded = jwt.verify(token, emailSignature);
  if (!decoded)
    return res
      .status(400)
      .json({ message: "invalid request", reason: "no token found" });
  const { email } = decoded;
  const student = User.findOne({ email });
  if (!student) return res.status(400).json({ message: "student not found" });
  res.json({ message: `login link at ${loginLink}` });
};

export { verifyController };
