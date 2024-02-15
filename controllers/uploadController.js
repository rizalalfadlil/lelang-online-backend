// File: uploadController.js
const multer = require("multer");

// Create multer object with custom filename
const upload = multer({
  // Specify destination folder
  dest: "uploads/",
  // Specify filename
  filename: function (req, file, cb) {
    // Use parameter id as filename
    cb(null, req.params.id);
  },
});

exports.upload = async (req, res) => {
  try {
    // Upload file using multer
    upload.single("image")(req, res, (err) => {
      if (err) {
        // Handle error
        console.error(err);
        res.status(500).send("Internal server error");
      } else {
        // Get file information
        const file = req.file;
        // Send response
        res.json({ message: "File uploaded successfully", file: file });
      }
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal server error");
  }
};
