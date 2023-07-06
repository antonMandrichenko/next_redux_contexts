import type { NextPage } from "next";
import { useSocket } from "../hooks/useSocket";
import { useEffect, useState } from "react";

const SocketPage: NextPage<{}> = () => {
  const [data, setData] = useState("");

  const socket = useSocket("/api/io");

  useEffect(() => {
    if (socket) {
      socket.on("fromServer", (data: string) => {
        setData(data)
      });
    }
  }, [socket]);

  return (
    <>
      <div>socket</div>
      <div>{data}</div>
    </>
  );
};

export default SocketPage;
