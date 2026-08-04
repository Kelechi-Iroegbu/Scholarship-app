import { api } from './backendClient';

const appClient = {
  auth: {
    me: async () => api.auth.me(),
    logout: async (redirectUrl) => {
      await api.auth.logout();
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
    },
    redirectToLogin: (returnTo) => {
      window.location.href = `/login${returnTo ? `?returnTo=${encodeURIComponent(returnTo)}` : ''}`;
    },
    loginViaEmailPassword: async (email, password) => api.auth.login(email, password),
    loginWithProvider: (provider, returnTo) => {
      console.warn(`Social login (${provider}) is not supported in the local backend.`);
      window.location.href = `/login${returnTo ? `?returnTo=${encodeURIComponent(returnTo)}` : ''}`;
    },
    register: async (payload) => api.auth.register(payload),
    verifyOtp: async () => {
      console.warn('OTP verification is not supported in the local backend.');
      return { access_token: api.getAccessToken() };
    },
    setToken: (token) => api.setAccessToken(token),
    resendOtp: async () => {
      console.warn('OTP resend is not supported in the local backend.');
      return null;
    },
    resetPasswordRequest: async (email) => api.auth.forgotPassword(email),
    resetPassword: async ({ resetToken, newPassword }) => api.auth.resetPassword(resetToken, newPassword),
    updateMe: async (payload) => api.auth.updateMe(payload),
  },
  entities: {
    ApplicationCycle: {
      list: async (sort) => api.cycles.list(sort),
      filter: async (params) => {
        if (params?.is_active) {
          return api.cycles.listActive();
        }
        return api.cycles.list(params);
      },
      update: async (id, payload) => api.cycles.update(id, payload),
      create: async (payload) => api.cycles.create(payload),
    },
    Application: {
      list: async (sort, limit) => api.applications.list(limit !== undefined ? { limit } : {}),
      get: async (id) => {
        const results = await api.applications.list({ id });
        return results[0] || null;
      },
      filter: async (params) => api.applications.list(params),
      create: async (payload) => api.applications.create(payload),
      update: async (id, payload) => api.applications.update(id, payload),
    },
    Document: {
      filter: async (params) => api.documents.list(params),
      create: async (payload) => api.documents.create(payload),
      update: async (id, payload) => api.documents.update(id, payload),
    },
    ApplicationMessage: {
      filter: async (params) => api.messages.list(params),
      create: async (payload) => api.messages.create(payload),
    },
  },
  integrations: {
    Core: {
      UploadFile: async ({ file }) => api.uploadFile(file),
    },
  },
  resolveFileUrl: (fileUrl) => api.resolveFileUrl(fileUrl),
};

export { appClient };
