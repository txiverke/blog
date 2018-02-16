export const api = {
  url: process.env.API_URL || 'http://localhost:8888/api/blog',
  auth: process.env.AUTH_URL || 'http://localhost:8888/auth/signin',
  public: process.env.PUBLIC || 'http://localhost:8888/blog/img',
  profileId: process.env.USER_ID || '5a8617fe734d1d1523dd01fd',
  token: process.env.TOKEN_KEY || 'xavierVilaTechToken'
}