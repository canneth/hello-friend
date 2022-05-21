
export const BACKEND_SCHEME = process.env.NODE_ENV === 'development' || 'test' ? 'http' : 'https';
export const BACKEND_AUTHORITY = process.env.NODE_ENV === 'development' || 'test' ? 'localhost:4000' : 'TODO: Put actual url here';