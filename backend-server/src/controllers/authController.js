import { randomUUID } from 'crypto';
import { User } from '../models/User.js';
import { toSafeUser } from '../views/userView.js';

export const me = (req, res) => {
  res.json({ user: toSafeUser(req.user) });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findByEmail(email);
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  if (!user.token) {
    User.issueToken(user);
  }
  await User.save(user);
  res.json({ token: user.token, user: toSafeUser(user) });
};

export const register = async (req, res) => {
  const { email, password, full_name, phone, indigene_confirmed } = req.body;
  if (!email || !password || !full_name || !phone) {
    return res.status(400).json({ message: 'Email, password, name, and phone are required' });
  }
  if (await User.findByEmail(email)) {
    return res.status(409).json({ message: 'A user with that email already exists' });
  }
  const user = await User.create({ email, password, full_name, phone, indigene_confirmed });
  res.json({ token: user.token, user: toSafeUser(user) });
};

export const logout = async (req, res) => {
  req.user.token = null;
  await User.save(req.user);
  res.json({ success: true });
};

export const updateMe = async (req, res) => {
  const updates = req.body;
  if (updates.full_name !== undefined) req.user.full_name = updates.full_name;
  if (updates.phone !== undefined) req.user.phone = updates.phone;
  if (updates.indigene_confirmed !== undefined) req.user.indigene_confirmed = updates.indigene_confirmed;
  await User.save(req.user);
  res.json({ user: toSafeUser(req.user) });
};

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findByEmail(email);
  if (user) {
    user.reset_token = randomUUID();
    user.reset_token_expires = Date.now() + 1000 * 60 * 60;
    await User.save(user);
    console.log(`Password reset token for ${email}: ${user.reset_token}`);
  }
  res.json({ message: 'If an account exists with that email, you will receive reset instructions.' });
};

export const resetPassword = async (req, res) => {
  const { resetToken, newPassword } = req.body;
  if (!resetToken || !newPassword) {
    return res.status(400).json({ message: 'Reset token and new password are required' });
  }
  const user = await User.findByResetToken(resetToken);
  if (!user) {
    return res.status(400).json({ message: 'Invalid or expired reset token' });
  }
  user.password = newPassword;
  user.reset_token = null;
  user.reset_token_expires = null;
  await User.save(user);
  res.json({ message: 'Password reset successfully' });
};
