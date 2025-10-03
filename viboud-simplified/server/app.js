import express from "express";
import { me } from "./controllers/authControllers.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

const app = express();
const port = 3000;

export let allSong = ["hello"];

const corsOption = {
  origin: ["http://localhost:3000", "http://localhost:5173"],
  credentials: true,
};
app
  .use(cors(corsOption))
  .use(express.json())
  .use(cookieParser())
  .get("/api/auth/me", me);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    transports: ["websocket", "polling"],
  },
});

io.on("connection", (socket) => {
  console.log("an user connected:");

  // Update the songs for the current user
  socket.emit("update-songs", allSong);

  socket.on("new-song", (song) => {
    allSong.push(song);
    console.log("new-song server");
    // Update the songs globally
    io.emit("update-songs", allSong);
  });
});

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
