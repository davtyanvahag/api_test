import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import Router from "./config/routes";
import Cors from "cors";
dotenv.config();

const mongoString = process.env.DATABASE_URL;
console.log("aaa:::", mongoString);
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error: any) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});
const app = express();

app.use(express.json());
app.use(Cors());
app.use(Router);
app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
