export const api = {
  url: process.env.API_URL || 'http://localhost:8888/api/blog',
  auth: process.env.AUTH_URL || 'http://localhost:8888/auth/signin',
  profileId: process.env.USER_ID || '5a5e8d951e15e1a39b7d8b09'
}