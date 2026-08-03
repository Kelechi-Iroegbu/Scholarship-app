// Express 4 doesn't catch rejections thrown by async middleware/handlers —
// without this, a failed DB query hangs the request instead of erroring.
// Wrap every async route handler and async middleware with this.
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};
