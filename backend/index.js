import express from "express";
import cors from "cors";
import mysql from "mysql";

const server = express();

server.use(express.json());
server.use(cors());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "fseletro",
});

server.get("/products", function (req, res) {
  connection.query("SELECT * FROM produtos", (error, result) => {
    res.json(result ? result : error);
  });
});

server.get("/messages", (req, res) => {
  connection.query(
    "SELECT * FROM comentarios order by id desc",
    (error, result) => {
      res.json(result ? result : error);
    }
  );
});

server.post("/messsages", (req, res) => {
  const { nome, msg } = req.body;
  connection.query(
    `INSERT INTO comentarios (nome, msg) VALUES ('${nome}', '${msg}')`,
    (error, result) => {
      error && res.json(error);
      result && res.status(201).json(result);
    }
  );
});

server.get("/carrinho", (req, res) => {
    connection.query("SELECT * FROM teste", (error, result) => {
        res.json(result ? result : error);
    });
});

server.listen(3001, () => {
  console.log("Server started!");
});
