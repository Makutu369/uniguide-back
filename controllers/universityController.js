import { Schools } from "../models/universities.js";
const getUniversities = async (req, res) => {
  const schools = await Schools.find({});
  res.status(200).json(schools);
};

export { getUniversities };
