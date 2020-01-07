const log = require('fancy-log');
const express = require('express');
var Room = require('../manager/roomManager');


const router = express.Router();
var aCode;
var names = [];

router.get('/makeRoom/:name', async (req, res) => {
  const { name } = req.params;
  names.push(name);
  try {
    var room = Room.generateAccessCode(); 
    aCode = room;

    var data = {name, room, "Order": 1};
    res.status(200).send(data);
  } catch (error) {
    log.error(error);
    res.sendStatus(500);
  }
});

router.post('/joinRoom', async(req, res) => {
  const { accessCode, name } = req.body;
  try {
    log(accessCode);
    if(aCode == accessCode) {
      names.push(name);
      log(names);
      res.status(200).send("Success");
    }
    res.status(400).send("Failed");
  } catch (error) {
    log.error(error);
    res.sendStatus(500);
  }
});


module.exports = router;