"use strict";

module.exports = function (app) {
  const cliente = require("../controllers/clientes/ClienteController");

  // rotas definidas para a API Restful Clientes

  app.route("/cliente").get(cliente.lista_clientes).post(cliente.novo_cliente);

  app
    .route("/cliente/:id")
    .get(cliente.pesquisar_cliente)
    .put(cliente.alterar_um_cliente)
    .delete(cliente.eliminar_um_cliente);
};
