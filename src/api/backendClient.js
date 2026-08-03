const getAccessToken = () => window.localStorage.getItem('access_token');
const setAccessToken = (token) => {
  if (token) {
    window.localStorage.setItem('access_token', token);
  } else {
    window.localStorage.removeItem('access_token');
  }
};

const request = async (path, { method = 'GET', body, auth = true, headers = {} } = {}) => {
  const init = {
    method,
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    }
  };

  if (auth) {
    const token = getAccessToken();
    if (token) {
      init.headers.Authorization = `Bearer ${token}`;
    }
  }

  if (body !== undefined) {
    init.body = JSON.stringify(body);
  }

  const response = await fetch(path, init);
  const text = await response.text();
  let data = null;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    data = text;
  }

  if (!response.ok) {
    const error = new Error(data?.message || response.statusText || 'Request failed');
    error.status = response.status;
    error.data = data;
    throw error;
  }

  return data;
};

const auth = {
  login: async (email, password) => {
    const result = await request('/api/auth/login', { method: 'POST', body: { email, password }, auth: false });
    setAccessToken(result.token);
    return result;
  },
  register: async ({ email, password, full_name, phone, indigene_confirmed }) => {
    const result = await request('/api/auth/register', {
      method: 'POST',
      body: { email, password, full_name, phone, indigene_confirmed },
      auth: false
    });
    setAccessToken(result.token);
    return result;
  },
  logout: async () => {
    try {
      await request('/api/auth/logout', { method: 'POST' });
    } catch {
      // Ignore logout failures.
    }
    setAccessToken(null);
  },
  me: async () => {
    const result = await request('/api/auth/me', { method: 'GET' });
    return result.user;
  },
  updateMe: async (updates) => {
    const result = await request('/api/auth/me', { method: 'PUT', body: updates });
    return result.user;
  },
  forgotPassword: async (email) => {
    return request('/api/auth/forgot-password', { method: 'POST', body: { email }, auth: false });
  },
  resetPassword: async (resetToken, newPassword) => {
    return request('/api/auth/reset-password', { method: 'POST', body: { resetToken, newPassword }, auth: false });
  }
};

const cycles = {
  listActive: async () => {
    return request('/api/cycles/active', { method: 'GET' });
  },
  list: async () => {
    return request('/api/admin/cycles', { method: 'GET' });
  },
  create: async (payload) => {
    return request('/api/admin/cycles', { method: 'POST', body: payload });
  },
  update: async (id, payload) => {
    return request(`/api/admin/cycles/${id}`, { method: 'PUT', body: payload });
  }
};

const applications = {
  list: async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/api/applications${query ? `?${query}` : ''}`, { method: 'GET' });
  },
  get: async (id) => {
    const results = await applications.list({ id });
    return results[0] || null;
  },
  create: async (payload) => {
    return request('/api/applications', { method: 'POST', body: payload });
  },
  update: async (id, payload) => {
    return request(`/api/applications/${id}`, { method: 'PUT', body: payload });
  }
};

const documents = {
  list: async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/api/documents${query ? `?${query}` : ''}`, { method: 'GET' });
  },
  create: async (payload) => {
    return request('/api/documents', { method: 'POST', body: payload });
  },
  update: async (id, payload) => {
    return request(`/api/documents/${id}`, { method: 'PUT', body: payload });
  }
};

const messages = {
  list: async (params = {}) => {
    const query = new URLSearchParams(params).toString();
    return request(`/api/messages${query ? `?${query}` : ''}`, { method: 'GET' });
  },
  create: async (payload) => {
    return request('/api/messages', { method: 'POST', body: payload });
  }
};

const admin = {
  applications: {
    list: async () => {
      return request('/api/admin/applications', { method: 'GET' });
    },
    get: async (id) => {
      return request(`/api/admin/applications/${id}`, { method: 'GET' });
    },
    update: async (id, payload) => {
      return request(`/api/admin/applications/${id}`, { method: 'PUT', body: payload });
    }
  }
};

const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  const response = await fetch('/api/uploads', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${getAccessToken()}`
    },
    body: formData
  });
  const result = await response.json();
  if (!response.ok) {
    const error = new Error(result?.message || response.statusText || 'Upload failed');
    error.status = response.status;
    throw error;
  }
  return result;
};

export const api = {
  auth,
  cycles,
  applications,
  documents,
  messages,
  admin,
  uploadFile,
  setAccessToken,
  getAccessToken
};
