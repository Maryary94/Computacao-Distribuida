"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ParqueSchema = new Schema(
  {
    parque: { type: String },
    price: { type: Number },
    lugares: [
      {
        lugar: {
          type: Number,
        },
        disponivel: {
          type: Boolean,
        },
        tipo: {
          type: Boolean,
        },
      },
    ],
  },

  { collection: "ParqueCollection", timestamps: true }
);

module.exports = mongoose.model("ParqueModel", ParqueSchema);
