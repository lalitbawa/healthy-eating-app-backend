const mongoose = require('mongoose');

const userTrackerSchema = new mongoose.Schema({
  userId: Number,
  calories: Number,
  food: String,
  date: Date,
});

const UserTracker = mongoose.model('UserTracker', userTrackerSchema);

module.exports = UserTracker;