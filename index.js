const log = require('fancy-log');
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser')

const app = express();
const server = http.createServer(app);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/rooms', require('./src/controller/rooms'));


server.listen(8080, () => {
  log('Started listening on port 8080!');
});