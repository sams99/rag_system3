export const BACKEND_CONFIG = {
  BASE_URL: 'https://rag-system3.onrender.com' ,
  ENDPOINTS: {
    UPLOAD_DOCUMENT: '/doc/upload',
    CHAT_QUERY: '/chat/query',
    DELETE_COLLECTION: '/doc/delete',
    DELETE_FILE: '/doc/delete-file'
  },
  TIMEOUTS: {
    UPLOAD: 300000, // 5 minutes for document upload/processing
    CHAT: 60000,    // 1 minute for chat queries
    DEFAULT: 30000  // 30 seconds for other requests
  }
}

// Helper function to build full URL
export const buildUrl = (endpoint) => {
  return `${BACKEND_CONFIG.BASE_URL}${endpoint}`;
};

// Request headers for different types of requests
export const getHeaders = (contentType = 'application/json') => {
  const headers = {};
  if (contentType === 'application/json') {
    headers['Content-Type'] = 'application/json';
  }
  // For multipart/form-data, don't set Content-Type (browser will set it with boundary)
  return headers;
}; 
