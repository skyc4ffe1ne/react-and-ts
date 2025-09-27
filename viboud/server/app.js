import express from "express";
import authRoutes from "./router/authRoutes.js";
import cookieParser from "cookie-parser"
import cors from "cors";
import Database from "better-sqlite3";
import http from "http";
import { Server } from "socket.io"


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

const server = http.createServer(app)

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173"
  }
})


let allSong = []

// is it normal to initialize with on and not emit ? 
io.on('connection', (socket) => {
  socket.on('new-song', (song) => {
    allSong.push(song)
    console.log("new-song server")
    socket.emit('update-songs', allSong)
  })
  console.log('an user connected:',);
});


server.listen(port, () => {
  console.log(`Server listening on ${port}`);
})
