import Student from "../models/student.js";
import MealInfo from "../models/studentMealInfo.js";

export const getMealInfo = async (req, res, next) => {
  let meal;
  try {
    meal = await MealInfo.find();
  } catch (err) {
    console.log(err);
  }
  if (!meal) {
    return res.status(404).json({ message: "No data Found" });
  }
  return res.status(200).json({ meal });
};
export const addMealInfo = async (req, res, next) => {
  const enroll = req.body.enroll;
  let existingStudent;
  try {
    existingStudent = await Student.findOne({ enroll });
  } catch (err) {
    console.log(err);
  }
  if (!existingStudent) {
    return res
      .status(400)
      .json({ message: "No Such Student Found in Database" });
  }
  const d = new Date();
  let hour = d.getHours();
  let breakfast = false;
  let lunch = false;
  let dinner = false;
  if (hour < 10) breakfast = true;
  else if (hour <= 3) lunch = true;
  else dinner = true;

  const info = new MealInfo({
    enroll,
    date: Date(),
    flag: true,
    lunch: lunch,
    breakfast: breakfast,
    dinner: dinner,
  });

  try {
    await info.save();
  } catch (err) {
    console.log(err);
  }
  console.log(info);
  return res.status(201).json({ info });
};
