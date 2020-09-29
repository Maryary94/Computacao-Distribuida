"use strict";

var mongoose = require("mongoose"),
  Parque = mongoose.model("ParqueModel");

// lista todos os Parques inseridos na base de dados
exports.lista_parques = function (req, res) {
  Parque.find()
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
// cria novo Parque
exports.novo_parque = function (req, res) {
  var novo = new Parque(req.body);
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

exports.pesquisar_parque = function (req, res) {
  Parque.find({ _id: req.params.id })
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

exports.alterar_um_parque = function (req, res) {
  Parque.findOneAndUpdate(
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

exports.eliminar_um_parque = function (req, res) {
  Parque.remove({ _id: req.params.id }, function (err) {
    if (err) res.send(err);
    res.json({ message: "parque eliminado" });
  });
};
