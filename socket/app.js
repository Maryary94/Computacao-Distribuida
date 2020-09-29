const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const mongoose = require("mongoose");

require("../rest//src/configMongo/configMongoDB");
const Parque = require("../rest/src/models/ParqueModel");

server.listen(3000);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.emit("news", [{ isto: "é test" }, { isto: "é test" }]);

  socket.on("ping", (data, respond) => {
    respond("pong");
  });

  socket.on("register", async (data) => {
    console.log(data);
  });
});
