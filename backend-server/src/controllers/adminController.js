import { Application } from '../models/Application.js';

export const listApplications = async (req, res) => {
  res.json(await Application.all());
};

export const getApplication = async (req, res) => {
  const application = await Application.findById(req.params.id);
  if (!application) {
    return res.status(404).json({ message: 'Application not found' });
  }
  res.json(application);
};

export const updateApplication = async (req, res) => {
  const application = await Application.findById(req.params.id);
  if (!application) {
    return res.status(404).json({ message: 'Application not found' });
  }
  Object.assign(application, req.body);
  await Application.save(application);
  res.json(application);
};
