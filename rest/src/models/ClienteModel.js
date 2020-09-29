"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ClienteSchema = new Schema(
  {
    nome: { type: String },
    viatura: [
      {
        type: String,
      },
    ],
    saldo: { type: Number },
  },

  { collection: "ClienteCollection", timestamps: true }
);

module.exports = mongoose.model("ClienteModel", ClienteSchema);
