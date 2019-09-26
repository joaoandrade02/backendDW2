const { Schema, model } = require("mongoose");
const TutoriaisSchema = new Schema(
  {
    nome: {
      type: String,
      required: true
    },
    nmail: {
      type: String,
      required: true,
      lowercase: true
    },
    senha: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);
module.exports = model("Tutoriais", TutoriaisSchema);
