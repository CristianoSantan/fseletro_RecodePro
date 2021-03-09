const { Schema, model } = require('mongoose');

const productsSchema = new Schema({
  categoria: {
    type: String,
  },
  descricao: {
    type: String,
  },
  preco: {
    type: String,
  },
  precofinal: {
    type: String,
  },
  imagem: {
    type: String,
  },
});

const productsModel = model('produtos', productsSchema);

module.exports = productsModel;