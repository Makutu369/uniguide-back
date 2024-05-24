import { User } from "../../models/user.js";
import jwt from "jsonwebtoken";
import { emailSignature } from "./env.js";

//register controller
const registerController = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) return res.status(400).json({ error: "user already exists" });

  //hashing password for enhanced security
  const salt = await bcrypt.genSalt();
  const hash = await bcrypt.hash(password, salt);

  //create a new user
  const student = new User({
    email,
    password: hash,
    verified: false,
  });

  //create a verfification link and send it
  const token = jwt.sign({ email }, emailSignature);
  const verificationLink = `${process.env.baseUrl}/verify-email?token=${token}`;
  const error = sendMail(email, verificationLink);
  if (!error)
    return res
      .status(400)
      .json({ error: "there was an error sending to email" });

  //save student in database and send a response to the client
  student.save();
  res
    .status(200)
    .json({ message: "user successfully created verify email and password" });
};

export { registerController };
