import { User } from "../../models/user.js";
import { emailSignature } from "./env.js";
import jwt from "jsonwebtoken";

const verifyController = async (req, res) => {
  const { token } = req.params;
  try {
    const decoded = jwt.verify(token, emailSignature);
    const { email } = decoded;
    const student = await User.findOne({ email });
    student.verified = true;
    await student.save();
    if (!student) return res.status(400).json({ message: "student not found" });
    res.status(200).json({ message: `login link at ` });
  } catch (error) {
    return res.status(400).json({ error, message: "invalid token" });
  }
  if (!token) return res.status(400).json({ message: " not token found" });
};

export { verifyController };
