const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
  nome: {
    type: String,
  },
  msg: {
    type: String,
  },
  data: {
    type: Date,
    default: new Date(),
  },
});

const messagesModel = model('comentarios', messageSchema);

module.exports = messagesModel;