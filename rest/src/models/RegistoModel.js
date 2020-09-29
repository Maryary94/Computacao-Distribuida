"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const RegistoSchema = new Schema(
  {
    id_cliente: { type: Schema.Types.ObjectId, ref: "ClienteModel" },
    id_parque: { type: Schema.Types.ObjectId, ref: "ParqueModel" },
    matricula: { type: String },
    lugar: { type: Number },
    hora_entrada: { type: Date, default: Date.now },
    hora_saida: { type: Date },
    forma_pagamento: { type: String },
    valor: { type: Number },
  },

  { collection: "RegistoCollection", timestamps: true }
);

module.exports = mongoose.model("RegistoModel", RegistoSchema);
