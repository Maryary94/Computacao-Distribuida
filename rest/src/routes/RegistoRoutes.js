"use strict";

module.exports = function (app) {
  const registo = require("../controllers/registo/RegistoController");
  // rotas definidas para a API Restful registos

  app.route("/registo").get(registo.lista_registos).post(registo.novo_registo);

  app
    .route("/registo/:id")
    .get(registo.pesquisar_registo)
    .put(registo.alterar_um_registo)
    .delete(registo.eliminar_um_registo);
};
