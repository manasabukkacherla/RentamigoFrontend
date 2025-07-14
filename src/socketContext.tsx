import React, { createContext } from "react";
import { io, Socket } from "socket.io-client";

// Create a single socket connection to the backend.
// Ensure the URL matches your backend server (port 5003 in this case).
const socket = io("https://rentamigotech.onrender.com", {
  path: "/socket.io",
  transports: ["websocket", "polling"],
  withCredentials: true // 🔥 this is the missing key
});

// Wrap the createContext call in parentheses to disambiguate the generic syntax.
export const SocketContext = createContext<Socket>(socket);
