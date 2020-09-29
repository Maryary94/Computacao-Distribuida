"use strict";

module.exports = function (app) {
  const parque = require("../controllers/parques/ParqueController");
  // rotas definidas para a API Restful parque

  app.route("/parque").get(parque.lista_parques).post(parque.novo_parque);

  app
    .route("/parque/:id")
    .get(parque.pesquisar_parque)
    .put(parque.alterar_um_parque)
    .delete(parque.eliminar_um_parque);
};
