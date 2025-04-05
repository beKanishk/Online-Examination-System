import express from "express";
import http from "http";
import socketIo from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import TeacherRouter from "../routers/TeacherRouter";

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/teacher", TeacherRouter);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.log("❌ MongoDB Error:", err));

// WebRTC for Live Video Streaming
let studentStreams = {};

io.on("connection", (socket) => {
  console.log(`Student Connected: ${socket.id}`);

  socket.on("join_exam", (data) => {
    studentStreams[socket.id] = data.username;
    io.emit("student_list", studentStreams);
  });

  socket.on("stream_video", (data) => {
    io.emit("receive_video", { id: socket.id, video: data.video });
  });

  socket.on("block_student", (studentId) => {
    io.to(studentId).emit("blocked", { message: "You have been blocked." });
    delete studentStreams[studentId];
    io.emit("student_list", studentStreams);
  });

  socket.on("disconnect", () => {
    console.log(`Student Disconnected: ${socket.id}`);
    delete studentStreams[socket.id];
    io.emit("student_list", studentStreams);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
