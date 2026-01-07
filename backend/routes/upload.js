const express = require('express');
const upload = require('../middleware/upload');
const { protect } = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/upload
// @desc    Upload file
// @access  Private
router.post('/', protect, upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: 'No file uploaded',
    });
  }

  res.json({
    success: true,
    data: {
      url: req.file.path,
      publicId: req.file.filename,
    },
  });
});

module.exports = router;

