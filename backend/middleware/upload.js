// Used when updating image (here no use)
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const uploadDir = 'uploads/';

// Automatically create the uploads folder if it doesn't exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  }
});

const upload = multer({ storage });
module.exports = upload;
