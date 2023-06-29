const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  originalName: String,
  fileName: String,
  filePath: String,
  fileSize: Number
});

module.exports = mongoose.model('File', fileSchema);
