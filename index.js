const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));



io.on("connection", (socket) => {
  console.log(`Socket id: ${socket.id}`)
});

//Dizer que está online
httpServer.listen(3000, () => {
    console.log('Serving')
});