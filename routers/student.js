import express from "express";
import { addStudent, getAllStudents } from "../controllers/student.js";

const router = express.Router();

router.get("/", getAllStudents);
router.post("/add", addStudent);
export default router;
