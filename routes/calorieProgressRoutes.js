const express = require('express');
const router = express.Router();
const calorieProgressController = require('../controllers/calorieProgressController');

router.post('/usertracker', calorieProgressController.addCalories);
router.get('/usertracker', calorieProgressController.getUserTracker);

module.exports = router;