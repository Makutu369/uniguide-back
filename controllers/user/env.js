import dotenv from "dotenv";
dotenv.config();
const emailSignature = process.env.emailPrivateKey;
const userSignature = process.env.userPrivateKey;

export { emailSignature, userSignature };
