const log = require('fancy-log');
const express = require('express');
var roomManager = require('../manager/roomManager');
var mongoose = require('mongoose');
const Room = require('../models/room');

const router = express.Router();

router.post('/makeRoom', async (req, res) => {
  const { user } = req.body;
  if (!user) return res.status(400).send('User is requred!');

  try {
    // const room = new Room({ name, host: req.})
    const roomAccessCode = roomManager.generateAccessCode(); 
    const room = new Room({name: roomAccessCode, host: user});
    await room.save()

    res.status(200).send(roomAccessCode);
  } catch (error) {
    log.error(error);
    res.sendStatus(500);
  }
});

router.get('/:roomId', async (req, res) => {
  const { roomId } = req.params;
  try {
    const room = await Room.find({name: roomId});
    if (!room) res.status(404).send({ error: 'Not found!' });

    res.status(200).send(room);
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