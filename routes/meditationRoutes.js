const express = require('express');
const router = express.Router();
const meditationController = require('../controllers/meditationController');

router.get('/meditation', meditationController.getMeditation);

module.exports = router;