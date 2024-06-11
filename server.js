import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import user from "./routes/usersRoute.js";
import genres from "./routes/genres.js";
import schools from "./routes/universities.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 6000;
mongoose

  .connect(process.env.MONGO_URI)

  .then(() => console.log("db success"))
  .catch((err) => console.log(err.message));

app.get("/", (req, res) => {
  res.json({ message: "hello world kwame" });
});
app.use("/user", user);
app.use("/genres", genres);
app.use("/universities", schools);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
