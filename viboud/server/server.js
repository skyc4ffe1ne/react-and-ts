import express from "express";
import { createServer } from "node:http"
import { DatabaseSync } from "node:sqlite";
import authRoutes from "./routes/authRoutes.js";
import cors from "cors";

const app = express();

const server = createServer(app)
const port = 3000;
const database = new DatabaseSync(":memory:")
const corsOption = {
  origin: ["http://localhost:3000", "http://localhost:5173"]
}

database.exec(
  `
CREATE TABLE "user"(
  "id" INTEGER,
  "username" TEXT,
  "email" TEXT,
  "password" TEXT,
  PRIMARY KEY ("id")
)
`
)



//app.use("/login")
app
  .use(cors())
  .use(express.json())
  .use("/", authRoutes)
  .use("/api/signup", authRoutes)


server.listen(port, () => {
  console.log(`Server listening on ${port}`);
})






