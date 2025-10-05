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
  roomName: {
    songs: [{}],
    users: [],
  },
};

// -> Room page <-
io.on("connection", (socket) => {
  console.log("an user connected:");

  socket.on("initial-songs", ({ roomName, username }) => {
    console.log("Username - server:initial-songs:", username);
    socket.join(roomName);

    if (!rooms[roomName]) {
      rooms[roomName] = {};
      rooms[roomName].songs = [];
      rooms[roomName].users = [];
    }

    let currUser = rooms[roomName].users;
    currUser.filter((user) => user === username).length === 0 &&
      rooms[roomName].users.push(username);
    io.to(roomName).emit("update-local", {
      songs: rooms[roomName].songs,
      users: rooms[roomName].users,
    });
  });

  socket.on("new-song", ({ roomName, song }) => {
    rooms[roomName].songs.push(song);
    socket.to(roomName).emit("song-added", song);
    // io.emit("update-songs", rooms[room]);
  });

  socket.on("new-like", ({ roomName, songID }) => {
    rooms[roomName].songs.map((el) => {
      if (el.id === songID) {
        el.like = el.like + 1;
      }
      return el;
    });

    socket.to(roomName).emit("update-like", rooms[roomName].songs);
  });
});

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
