const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Anthropic = require('@anthropic-ai/sdk');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(process.env.MONGODB_URI, {
  dbName: 'healthyapp',
})
  .then(() => console.log('Connected to the database'))
  .catch((error) => console.error('Error connecting to the database:', error));

// API routes
const authRoutes = require('./routes/authRoutes');
const calorieCounterRoutes = require('./routes/calorieCounterRoutes');
const calorieProgressRoutes = require('./routes/calorieProgressRoutes');
const meditationRoutes = require('./routes/meditationRoutes');

app.use('/api', authRoutes);
app.use('/api', calorieCounterRoutes);
app.use('/api', calorieProgressRoutes);
app.use('/api', meditationRoutes);

// Anthropic API setup
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

// Meal plan generation route
app.post('/api/generate-meal-plans', async (req, res) => {
  try {
    const { prompt } = req.body;
    const response = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 2000,
      temperature: 0,
      messages: [
        {
          role: "user",
          content: prompt,
        },
      ],
    });
    res.json({ completion: response.content });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});