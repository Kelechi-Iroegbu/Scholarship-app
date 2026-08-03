import { Document } from '../models/Document.js';

export const list = async (req, res) => {
  const { application_id } = req.query;
  if (!application_id) {
    return res.json([]);
  }
  res.json(await Document.byApplication(application_id));
};

export const create = async (req, res) => {
  const { application_id, type, file_url, file_name } = req.body;
  if (!application_id || !type || !file_url || !file_name) {
    return res.status(400).json({ message: 'application_id, type, file_url and file_name are required' });
  }
  const document = await Document.create({ application_id, type, file_url, file_name });
  res.json(document);
};

export const update = async (req, res) => {
  const document = await Document.findById(req.params.id);
  if (!document) {
    return res.status(404).json({ message: 'Document not found' });
  }
  Object.assign(document, req.body);
  await Document.save(document);
  res.json(document);
};
