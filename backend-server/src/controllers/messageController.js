import { Message } from '../models/Message.js';

export const list = async (req, res) => {
  const { application_id } = req.query;
  if (!application_id) {
    return res.json([]);
  }
  res.json(await Message.byApplication(application_id));
};

export const create = async (req, res) => {
  const { application_id, applicant_id, message, is_internal } = req.body;
  if (!application_id || !message) {
    return res.status(400).json({ message: 'application_id and message are required' });
  }
  const note = await Message.create({
    application_id,
    applicant_id,
    message,
    is_internal,
    sender_name: req.user.full_name
  });
  res.json(note);
};
