const UserTracker = require('../models/UserTracker');

exports.addCalories = async (req, res) => {
  try {
    const { userId, calories, food, date } = req.body;

    // Create a new user tracker entry
    const newTracker = new UserTracker({ userId, calories, food, date });
    const savedTracker = await newTracker.save();

    res.status(201).json(savedTracker);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserTracker = async (req, res) => {
  try {
    const { userId } = req.query;

    // Find user tracker entries by userId
    const userTracker = await UserTracker.find({ userId });

    res.status(200).json(userTracker);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};