const path = require('path');
const fs = require('fs').promises;

// File helper utilities
const getFileExtension = (filename) => {
  return path.extname(filename).toLowerCase();
};

const isValidFileType = (filename, allowedTypes) => {
  const ext = getFileExtension(filename);
  return allowedTypes.includes(ext);
};

const getFileSize = async (filePath) => {
  try {
    const stats = await fs.stat(filePath);
    return stats.size;
  } catch (error) {
    return 0;
  }
};

const formatFileSize = (bytes) => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
};

module.exports = {
  getFileExtension,
  isValidFileType,
  getFileSize,
  formatFileSize,
};

