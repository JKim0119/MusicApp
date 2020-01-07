const { model, Schema } = require('mongoose');


const userSchema = new Schema({
  username: { type: String, index: { unique: true }, required: true },
  password: { type: String, required: true },
  displayName: { type: String, required: true },
  isConnected: { type: Boolean, default: false },
  roomConnection: { type: Schema.Types.ObjectId, ref: 'Room' },
  gameConnection: { type: Schema.Types.ObjectId, ref: 'Game' },
});