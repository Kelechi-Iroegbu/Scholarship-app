import { ApplicationCycle } from '../models/ApplicationCycle.js';

export const listActive = async (req, res) => {
  res.json(await ApplicationCycle.active());
};

export const listAll = async (req, res) => {
  res.json(await ApplicationCycle.all());
};

export const create = async (req, res) => {
  const cycle = await ApplicationCycle.create(req.body);
  res.json(cycle);
};

export const update = async (req, res) => {
  const cycle = await ApplicationCycle.findById(req.params.id);
  if (!cycle) {
    return res.status(404).json({ message: 'Cycle not found' });
  }
  Object.assign(cycle, req.body);
  await ApplicationCycle.save(cycle);
  res.json(cycle);
};
