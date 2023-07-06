import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
import { ClientToServerEvents, ServerToClientEvents } from "../models/socket";

export function useSocket(url: string) {
    const [socket, setSocket] = useState<Socket<ServerToClientEvents, ClientToServerEvents> | null>(null);
    useEffect(() => {
      fetch(url).finally(() => {
        const socketio = io({
            path: '/api/socket_io',
            });
        socketio.on('connect', () => {
          console.log('connect');
          socketio.emit('hello');
        });
        socketio.on('disconnect', () => {
          console.log('disconnect');
        });
        setSocket(socketio);
      });
      function cleanup() {
        socket?.disconnect();
      }
      return cleanup;
    }, []);
    return socket;
  }