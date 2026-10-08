import { UploadedFile } from '../models/UploadedFile.js';

// Types safe to render in the browser; anything else is forced to download so
// an uploaded .html/.svg can never execute on the API origin.
const INLINE_TYPES = new Set([
  'application/pdf',
  'image/png',
  'image/jpeg',
  'image/gif',
  'image/webp',
]);

export const uploadFile = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'File is required' });
  }
  const id = await UploadedFile.create({
    file_name: req.file.originalname,
    mime_type: req.file.mimetype || 'application/octet-stream',
    data: req.file.buffer,
  });
  res.json({ file_url: `/uploads/${id}`, file_name: req.file.originalname });
};

// TODO: for now only this admin may open attachments (other admins are
// blocked); remove the email check to open viewing to all admins, and the
// matching VIEW_FILES_ALLOWED_EMAIL in AdminApplicationDetail.jsx.
const VIEW_FILES_ALLOWED_EMAIL = 'kiroegbu@gmail.com';

export const serveFile = async (req, res, next) => {
  const { user } = req;
  const allowed =
    user.email?.toLowerCase() === VIEW_FILES_ALLOWED_EMAIL ||
    (user.role !== 'admin' && (await UploadedFile.isOwnedBy(req.params.id, user.id)));
  if (!allowed) {
    return res.status(403).json({ message: 'You are not allowed to view this file' });
  }
  const file = await UploadedFile.findById(req.params.id);
  if (!file) return next();
  const inline = INLINE_TYPES.has(file.mime_type);
  res.set({
    'Content-Type': inline ? file.mime_type : 'application/octet-stream',
    'Content-Disposition': `${inline ? 'inline' : 'attachment'}; filename*=UTF-8''${encodeURIComponent(file.file_name)}`,
    'X-Content-Type-Options': 'nosniff',
    'Cache-Control': 'private, max-age=3600',
  });
  res.send(file.data);
};
