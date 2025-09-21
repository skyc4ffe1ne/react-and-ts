import express from "express";
import { createServer } from "node:http"
import { Database } from "bun:sqlite";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

const app = express();

const server = createServer(app)
const port = 3000;
export const db = new Database("./db/appDB.sqlite")
const corsOption = {
  origin: ["http://localhost:3000", "http://localhost:5173"]
}

app
  .use(cors(corsOption))
  .use(express.json())
  .use("/api/auth/", authRoutes)


server.listen(port, () => {
  console.log(`Server listening on ${port}`);
})






