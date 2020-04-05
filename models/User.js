const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    rquired: true,
  },
  email: {
    type: String,
    rquired: true,
    unique: true,
  },
  password: {
    type: String,
    rquired: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('user', UserSchema);
