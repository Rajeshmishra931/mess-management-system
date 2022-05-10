import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  enroll: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Student", studentSchema);
