const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

UserSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model('User', UserSchema);

const WordSchema = new Schema({
  word: {
    type: String,
    required: true
  },
  definition: {
    type: String,
    required: true
  }
});
const Word = mongoose.model('Word', WordSchema);

module.exports = {
  User,
  Word
};
