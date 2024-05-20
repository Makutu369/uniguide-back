///we want to create a new registered user with email and password in mongodb;

import mongoose from "mongoose";
import express from "express";
import user from "./routes/usersRoute.js";
import dotenv from "dotenv";
import genres from "./routes/genres.js";
import schools from "./routes/universities.js";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;
mongoose
  .connect("mongodb://localhost/server")
  .then(() => console.log("db success"))
  .catch((err) => console.log(err.message));

app.use("/user", user);
app.use("/genres", genres);
app.use("/universities", schools);
app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
