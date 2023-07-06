import { Server } from "socket.io";
import { NextApiRequest } from "next";
import {
  ClientToServerEvents,
  InterServerEvents,
  NextApiResponseWithSocket,
  ServerToClientEvents,
  SocketData,
} from "@/src/models/socket";

const isValidJwt = (header: string) => {
  const token = header.split(" ")[1];
  if (token === "abc") {
    return true;
  } else {
    return false;
  }
};

export default async function SocketHandler(
  req: NextApiRequest,
  res: NextApiResponseWithSocket
) {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("--------------Socket is initializing-----------------");
    const io = new Server<
      ClientToServerEvents,
      ServerToClientEvents,
      InterServerEvents,
      SocketData
    >(res.socket.server, {
      path: "/api/socket_io",
      addTrailingSlash: false,
    });
    res.socket.server.io = io;
    
    io.use((socket, next) => {
      const header = socket.handshake.headers["authorization"];
      console.log("header", header);
      if (!isValidJwt(header ?? "")) {
        //to handle unauthosized logic
        return next(new Error('authentication error'));
      }
      return next()
    });
    io.on("connection", (socket) => {
      socket.on("hello", () => {
        console.log("hello");
      });
      socket.emit("noArg");
    });
  }
  res.end();
}
