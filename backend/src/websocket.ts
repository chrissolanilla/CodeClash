import { Server } from "socket.io";

const io = new Server(3000, { cors: { origin: "*" } });

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("ping", () => {
    console.log("pong");
  });
});
