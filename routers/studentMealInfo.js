import express from "express";
import { getMealInfo, addMealInfo } from "../controllers/studentMealInfo.js";

const routerMeal = express.Router();

routerMeal.get("/", getMealInfo);
routerMeal.post("/add", addMealInfo);
export default routerMeal;
