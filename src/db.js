const log = require('fancy-log');
const mongoose = require('mongoose');

module.exports = {
  connect: () => {
    mongoose.connect('mongodb://localhost:27017/musicApp', { useUnifiedTopology:true, useNewUrlParser: true});
    mongoose.connection.on('connected', () => log.info('Mongo Connection Connected!'));
    mongoose.connection.on('error', () => log.error('Mongo Connection Error!'));
  },
};