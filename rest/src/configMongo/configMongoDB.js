const mongoose = require("mongoose");

const mongodb = {
  pathLocalhost: "mongodb://localhost/inscricoes_app",

  pathAtlas:
    "mongodb+srv://admin:admin@cluster0-qwqtb.mongodb.net/Trabalho_Final",
};

const urlBaseDados = mongodb.pathAtlas;

mongoose.connect(urlBaseDados, {
  useNewUrlParser: true,

  useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
  console.log(`Mongoose ligado a ${urlBaseDados}`);
});

mongoose.connection.on("error", (err) => {
  console.log("Mongoose erro ao conectar: ", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose: foi desligada a ligação. ");
});
