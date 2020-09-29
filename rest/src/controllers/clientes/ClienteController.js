"use strict";

var mongoose = require("mongoose"),
  Cliente = mongoose.model("ClienteModel");

// lista todos os clientes inseridos na base de dados
exports.lista_clientes = function (req, res) {
  Cliente.find()
    .exec()
    .then((result) => {
      res.status(200).jsonp(result);
    })
    .catch((err) => {
      res.status(500).jsonp({
        error: { message: err.message },
      });
    });
};
// cria novo cliente
exports.novo_cliente = function (req, res) {
  var novo = new Cliente(req.body);
  novo
    .save()
    .then((result) => {
      res.status(201).jsonp(novo);
    })
    .catch((err) => {
      res.status(500).jsonp({
        error: { message: err.message },
      });
    });
};

// pesquisa por um cliente pelo _id (criado pelo mongoose)
exports.pesquisar_cliente = function (req, res) {
  Cliente.find({ _id: req.params.id })
    .exec()
    .then((result) => {
      res.status(200).jsonp(result);
    })
    .catch((err) => {
      console.log(err);

      res.status(500).jsonp({
        error: { message: err.message },
      });
    });
};
// encontra um cliente com o id e faz a alteração (update)
exports.alterar_um_cliente = function (req, res) {
  Cliente.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true },
    function (err, info) {
      console.log(err);
      if (err) res.send(jsonp({ error: err }));

      res.json(info);
    }
  );
};

// remove através do id do cliente
exports.eliminar_um_cliente = function (req, res) {
  Cliente.remove({ _id: req.params.id }, function (err) {
    if (err) res.send(err);
    res.json({ message: "Cliente eliminado" });
  });
};
