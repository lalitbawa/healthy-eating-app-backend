const UserMacro = require('../models/UserMacro');

exports.createUserMacros = async (req, res) => {
  try {
    const { userId, protein, carbs, fat, calories } = req.body;

    // Check if the user already has macros data
    const existingMacros = await UserMacro.findOne({ userId });
    if (existingMacros) {
      // Update existing macros data
      existingMacros.protein = protein;
      existingMacros.carbs = carbs;
      existingMacros.fat = fat;
      existingMacros.calories = calories;
      const updatedMacros = await existingMacros.save();
      return res.status(200).json(updatedMacros);
    } else {
      // Create new macros data
      const newMacros = new UserMacro({ userId, protein, carbs, fat, calories });
      const savedMacros = await newMacros.save();
      return res.status(201).json(savedMacros);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserMacros = async (req, res) => {
    try {
      const { userId } = req.query;
  
      // Find user macros by userId
      const userMacros = await UserMacro.find({ userId });
  
      res.status(200).json(userMacros);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };