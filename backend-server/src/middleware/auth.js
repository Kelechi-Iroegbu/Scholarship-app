import { User } from '../models/User.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const getToken = (req) => {
  const header = req.headers.authorization || '';
  if (!header.startsWith('Bearer ')) return null;
  return header.slice(7);
};

export const requireAuth = asyncHandler(async (req, res, next) => {
  const user = await User.findByToken(getToken(req));
  if (!user) {
    return res.status(401).json({ message: 'Authentication required' });
  }
  req.user = user;
  next();
});

export const requireAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Admin access required' });
  }
  next();
};
