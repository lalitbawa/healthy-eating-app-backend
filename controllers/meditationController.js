const Meditation = require('../models/Meditation');

exports.getMeditation = async (req, res) => {
  try {
    // Find all meditation entries
    const meditations = await Meditation.find();

    res.status(200).json(meditations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};