
import type { Server as HTTPServer } from 'http'
import type { NextApiResponse } from 'next'
import type { Socket as NetSocket } from 'net'
import type { Server as IOServer } from 'socket.io'

export interface SocketServer extends HTTPServer {
    io?: IOServer | undefined
  }
  
  export interface SocketWithIO extends NetSocket {
    server: SocketServer
  }
  
  export interface NextApiResponseWithSocket extends NextApiResponse {
    socket: SocketWithIO
  }

export interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (a: number, b: string, c: Buffer) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
  }
  
  export interface ClientToServerEvents {
    hello: () => void;
  }
  
  export interface InterServerEvents {
    ping: () => void;
  }
  
  export interface SocketData {
    name: string;
    age: number;
  }