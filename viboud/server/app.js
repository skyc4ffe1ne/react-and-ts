import express from "express";
import authRoutes from "./router/authRoutes.js";
import cookieParser from "cookie-parser"
import cors from "cors";
import Database from "better-sqlite3";
const app = express();
const port = 3000;
export const db = new Database("./db/appDB.sqlite")

const corsOption = {
  origin: ["http://localhost:3000", "http://localhost:5173"],
  credentials: true,
}
app
  .use(cors(corsOption))
  .use(express.json())
  .use(cookieParser())
  .use("/api/auth/", authRoutes)

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
})
