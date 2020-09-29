"use strict";

var mongoose = require("mongoose"),
  Registo = mongoose.model("RegistoModel");

// lista todos os registos inseridos na base de dados
exports.lista_registos = function (req, res) {
  Registo.find()
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
// cria novo Registo
exports.novo_registo = function (req, res) {
  var novo = new Registo(req.body);
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

exports.pesquisar_registo = function (req, res) {
  Registo.find({ _id: req.params.id })
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

exports.alterar_um_registo = function (req, res) {
  Registo.findOneAndUpdate(
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

exports.eliminar_um_registo = function (req, res) {
  Registo.remove({ _id: req.params.id }, function (err) {
    if (err) res.send(err);
    res.json({ message: "registo eliminado" });
  });
};
