// src/routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/posts', postController.getAllPosts);
router.get('/posts/:id', postController.getPostById);

// Routes protected with authentication middleware
router.use(authMiddleware);

router.post('/posts', postController.createPost);
router.put('/posts/:id', postController.updatePost);
router.delete('/posts/:id', postController.deletePost);

module.exports = router;
