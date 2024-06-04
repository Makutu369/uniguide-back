import jwt from "jsonwebtoken";

const authorise = (req, res, next) => {
  const token = req.header("x-auth-token");
  //if token doesn't exist
  if (!token) return res.status(401).send("invalid request");
  try {
    const payload = jwt.verify(token, "lama");
    req.user = payload;
    next();
  } catch (e) {
    console.log(e.message);
  }
};

export default authorise;
