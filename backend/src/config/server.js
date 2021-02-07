const express = require("express");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

server.listen(3001, () => {
    console.log("Server started!");
  });

module.exports = server;