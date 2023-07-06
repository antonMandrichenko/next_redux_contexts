import type { NextPage } from "next";
import { useSocket } from "../hooks/useSocket";
import { useEffect } from "react";

const SocketPage: NextPage<{}> = () => {

    const socket = useSocket('/api/io')

    useEffect(() => {
        if (socket) {
          socket.on('noArg', () => {
            console.log('noArg');
          });
        //   socket.on('a user connected', () => {
        //     setUser('a user connected');
        //   });
        }
      }, [socket]);


  return (
    // <SocketProvider>
      <div>socket</div>
    // </SocketProvider>
  );
};

export default SocketPage;
