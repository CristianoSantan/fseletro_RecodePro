const mongoose = require('mongoose');

const mongoConnection = () => {
  mongoose
    .connect('mongodb+srv://fseletro:fseletro123@cluster0.zb7nw.mongodb.net/fseletro?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => {
      console.log('MongoDB connected');
    })
    .catch((error) => {
      console.log(error);
    });
};
module.exports = mongoConnection();