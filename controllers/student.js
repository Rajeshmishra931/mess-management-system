import Student from "../models/student.js";

export const getAllStudents = async (req, res, next) => {
  let students;
  try {
    students = await Student.find();
  } catch (err) {
    console.log(err);
  }

  if (!students) {
    return res.status(404).json({ message: "no sudent data found" });
  }
  return res.status(200).json({ students });
};

export const addStudent = async (req, res, next) => {
  const { enroll, name, year, flag } = req.body;
  const student = new Student({
    enroll,
    name,
    year,
    flag,
  });
  try {
    await student.save();
  } catch (err) {
    console.log(err);
  }
  return res.status(201).json({ student });
};
