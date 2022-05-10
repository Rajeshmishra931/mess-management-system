import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routers/student.js";
import routerMeal from "./routers/studentMealInfo.js";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use("/api/students", router);
app.use("/api/meal", routerMeal);
if(process.env.NODE_ENV = "production"){
  app.use(express.static("client/build"));
}
mongoose
  .connect(process.env.DATABASE)
  .then(() => {
    app.listen(PORT);
  })
  .then(() => {
    console.log("Conected to database and Listening to local host 5000");
  })
  .catch((err) => {
    console.log(err);
  });
