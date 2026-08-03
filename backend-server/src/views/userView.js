// Shapes a User model into what the API actually returns — strips
// password/token/reset-token fields that must never leave the server.
export const toSafeUser = (user) => ({
  id: user.id,
  email: user.email,
  full_name: user.full_name,
  phone: user.phone,
  indigene_confirmed: user.indigene_confirmed,
  role: user.role,
});
