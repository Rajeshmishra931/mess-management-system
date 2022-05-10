import mongoose from "mongoose";

const sudentMealSchema = new mongoose.Schema({
  enroll: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  flag: {
    type: Boolean,
    required: true,
  },
  breakfast: {
    type: Boolean,
    required: true,
  },
  lunch: {
    type: Boolean,
    required: true,
  },
  dinner: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model("MealInfo", sudentMealSchema);
