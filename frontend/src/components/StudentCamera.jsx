import React, { useEffect, useRef } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

const StudentCamera = ({ username }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    socket.emit("join_exam", { username });

    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        setInterval(() => {
          socket.emit("stream_video", { video: stream });
        }, 2000);
      })
      .catch((err) => console.error("Camera Error:", err));

    socket.on("blocked", (data) => {
      alert(data.message);
      window.location.href = "/";
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div>
      <h2>Student: {username}</h2>
      <video ref={videoRef} autoPlay playsInline></video>
    </div>
  );
};

export default StudentCamera;
