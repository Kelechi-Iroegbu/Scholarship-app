import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// No verified sending domain configured yet, so mail goes out from Resend's
// shared test domain. Swap this for e.g. 'no-reply@yourdomain.org' once a
// domain is verified in the Resend dashboard.
const FROM_ADDRESS = 'Anna Nnenna Egbe Queen Heart of Peace Educational Foundation <onboarding@resend.dev>';

export const sendPasswordResetEmail = async (email, resetToken) => {
  if (!resend) {
    console.log(`RESEND_API_KEY not set — password reset token for ${email}: ${resetToken}`);
    return;
  }
  const resetUrl = `${process.env.FRONTEND_URL || 'http://localhost:5179'}/reset-password?token=${resetToken}`;
  const { error } = await resend.emails.send({
    from: FROM_ADDRESS,
    to: email,
    subject: 'Reset your password',
    html: `
      <p>You requested a password reset.</p>
      <p><a href="${resetUrl}">Click here to reset your password</a>. This link expires in 1 hour.</p>
      <p>If you didn't request this, you can safely ignore this email.</p>
    `,
  });
  if (error) {
    console.error('Failed to send password reset email:', error);
  }
};
