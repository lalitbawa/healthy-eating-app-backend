const mongoose = require('mongoose');

const meditationSchema = new mongoose.Schema({
  name: String,
  description: String,
  duration: Number,
  instructions: String,
});

const Meditation = mongoose.model('Meditation', meditationSchema);

module.exports = Meditation;