const express = require("express");
const cors = require("cors");
const PORT = 5000;

const BD = require("./src/configMongo/configMongoDB");
const ClienteModel = require("./src/models/ClienteModel");
const ParqueModel = require("./src/models/ParqueModel");
const RegistoModel = require("./src/models/RegistoModel");

const ClienteRoutes = require("./src/routes/ClienteRoutes");
const ParqueRoutes = require("./src/routes/ParqueRoutes");
const RegistoRoutes = require("./src/routes/RegistoRoutes");

// configuração do express
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT ,DELETE");
  next();
});

// registar as rotas
ClienteRoutes(app);
ParqueRoutes(app);
RegistoRoutes(app);

app.listen(PORT, () =>
  console.log(`servidor a executar em http://localhost:${PORT}`)
);
// ainda não foi alterado
