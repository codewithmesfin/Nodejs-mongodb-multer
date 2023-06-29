
const multer = require('multer');

// Configure the storage destination and filename
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directory where the uploaded files will be stored
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Use a timestamp in the filename
  }
});

// Create the multer upload object
const upload = multer({ storage: storage });

module.exports = { upload };
