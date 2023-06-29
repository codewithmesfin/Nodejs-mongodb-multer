const File = require('../models/File');

exports.uploadFile =async (req, res) => {
 
  if (!req.file) {
    return res.status(400).send('No file was uploaded.');
  }

//   Create a new File object and save it to the database
try {
    const file = new File({
      originalName: req.file.originalname,
      fileName: req.file.filename,
      filePath: req.file.path,
      fileSize: req.file.size
    });

    await file.save();

    res.send('File uploaded and saved!');
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while saving the file.');
  }
};
