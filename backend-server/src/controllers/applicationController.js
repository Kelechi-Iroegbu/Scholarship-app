import { Application } from '../models/Application.js';

export const list = async (req, res) => {
  const query = req.query || {};
  let applications = await Application.all();
  if (query.id) {
    applications = applications.filter((application) => application.id === query.id);
  }
  if (query.cycle_id) {
    applications = applications.filter((application) => application.cycle_id === query.cycle_id);
  }
  if (req.user.role !== 'admin') {
    applications = applications.filter((application) => application.user_id === req.user.id);
  }
  if (query.limit && !Number.isNaN(Number(query.limit))) {
    applications = applications.slice(0, Number(query.limit));
  }
  res.json(applications);
};

export const create = async (req, res) => {
  if (!req.body.cycle_id) {
    return res.status(400).json({ message: 'cycle_id is required' });
  }
  const application = await Application.create(req.body, req.user);
  res.json(application);
};

export const update = async (req, res) => {
  const application = await Application.findById(req.params.id);
  if (!application) {
    return res.status(404).json({ message: 'Application not found' });
  }
  if (req.user.role !== 'admin' && application.user_id !== req.user.id) {
    return res.status(403).json({ message: 'Not allowed' });
  }
  Object.assign(application, req.body);
  await Application.save(application);
  res.json(application);
};
