// src/routes/profileRoutes.js
const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');

// Routes protected with authentication middleware
router.use(authMiddleware);

router.get('/profile', profileController.getUserProfile);
router.put('/profile', profileController.updateUserProfile);

module.exports = router;
