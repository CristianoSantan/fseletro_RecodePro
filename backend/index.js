const server = require('./src/config/server');
const mysqlConnection = require('./src/config/mysqlConnection');
const mongoConnection = require('./src/config/mongoConnection');
const productsModel = require('./src/models/productsModel');
const messagesModel = require('./src/models/messagesModel');

// --------------------------------------------- MongoDB
server.get('/products', async (req, res) => {
  res.json(await productsModel.find());
});

server.get('/messages', async (req, res) => {
  res.json(await messagesModel.find().sort({_id: -1}));
});

server.post('/messages', async (req, res) => {
  const { nome, msg } = req.body;
  res.json(await messagesModel.create({ nome, msg }));
});

// --------------------------------------------------- MySQL
// server.get("/produtos", (req, res) => {
//   mysqlConnection.query("SELECT * FROM produtos", (error, result) => {
//     res.json(result ? result : error);
//   });
// });

// server.get("/messages", (req, res) => {
//   mysqlConnection.query(
//     "SELECT * FROM comentarios order by id desc",
//     (error, result) => {
//       res.json(result ? result : error);
//     }
//   );
// });

// server.post("/messages", (req, res) => {
//   const { nome, msg } = req.body;
//   mysqlConnection.query(
//     `INSERT INTO comentarios (nome, msg) VALUES ('${nome}', '${msg}')`,
//     (error, result) => {
//       error && res.status(400).json({
//         error: true,
//         message: "Erro: não cadastrou"
//       });
//       result && res.status(201).json({
//         result: true,
//         message: "Cadastrada com sucesso!"
//       });
//     }
//   );
// });

// server.get("/carrinho", (req, res) => {
//     mysqlConnection.query("SELECT * FROM teste", (error, result) => {
//         res.json(result ? result : error);
//     });
// });