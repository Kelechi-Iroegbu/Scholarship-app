export const uploadFile = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'File is required' });
  }
  const fileUrl = `/uploads/${req.file.filename}`;
  res.json({ file_url: fileUrl, file_name: req.file.originalname });
};
