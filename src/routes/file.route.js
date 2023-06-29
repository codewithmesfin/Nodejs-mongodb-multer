const express = require('express');
const router = express.Router();
const fileController = require('../controllers/fileUploader');

const fileHandler = require('../middleware/fileHandler');

router.post('/', fileHandler.upload.single('file'), fileController.uploadFile);

module.exports = router;
