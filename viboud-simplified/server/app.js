import express from "express";
import { me, createMe } from "./controllers/authControllers.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";

const app = express();
const port = 3000;

const corsOption = {
  origin: ["http://localhost:3000", "http://localhost:5173"],
  credentials: true,
};
app
  .use(cors(corsOption))
  .use(express.json())
  .use(cookieParser())
  .get("/api/auth/me", me)
  .post("/api/auth/me", createMe);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    transports: ["websocket", "polling"],
  },
});

let rooms = {
  roomName: [
    {
      songs: "song",
    },
  ],
};

io.on("connection", (socket) => {
  console.log("an user connected:");

  socket.on("initial-songs", (roomName) => {
    socket.join(roomName);

    if (!rooms[roomName]) {
      rooms[roomName] = [];
    }
    socket.emit("update-local", rooms[roomName]);
  });

  socket.on("new-song", ({ roomName, song }) => {
    if (!rooms[roomName]) {
      rooms[roomName] = [];
    }

    rooms[roomName].push(song);
    socket.to(roomName).emit("song-added", song);

    // io.emit("update-songs", rooms[room]);
  });
});

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
