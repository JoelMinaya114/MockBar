const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Define Routes
router.get('/', homeController.home);
router.get('/about', homeController.about);

module.exports = router;
