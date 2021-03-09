const express = require("express");
const cors = require("cors");

const server = express();
const port = process.env.PORT || 3001;

server.use(express.json());
server.use(cors());

server.listen(port, () => {
    console.log(`Server runing on port ${port}`);
  });

module.exports = server;