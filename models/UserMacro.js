const mongoose = require('mongoose');

const userMacroSchema = new mongoose.Schema({
  userId: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
  calories: Number,
});

const UserMacro = mongoose.model('UserMacro', userMacroSchema);

module.exports = UserMacro;