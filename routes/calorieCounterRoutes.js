const express = require('express');
const router = express.Router();
const calorieCounterController = require('../controllers/calorieCounterController');

router.post('/usermacros', calorieCounterController.createUserMacros);
router.get('/usermacros', calorieCounterController.getUserMacros);
module.exports = router;