const { model, Schema } = require('mongoose');

const roomSchema = new Schema({
  name: String,
  host: {
    type: String,
    ref: 'User',
  },
  users: [{
    type: String,
    ref: 'User',
  }],
});

// roomSchema.methods.addUser = function (user) {
//   this.users.addToSet(user._id);
//   return this.save();
// }

// roomSchema.methods.removeUser = function (user) {
//   this.users.pull(user._id);
//   if (this.users.length === 0) return this.remove();
  
//   if (this.host.equals(user)) this.host = this.users[0];
//   return this.save();
// }

const Room = model('Room', roomSchema);

module.exports = Room;