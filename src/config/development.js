export const api = {
  url: process.env.API_URL || 'http://localhost:5000/api/blog',
  auth: process.env.AUTH_URL || 'http://localhost:5000/auth/signin',
  public: process.env.PUBLIC || 'http://localhost:5000/blog/img',
  profileId: process.env.USER_ID || '5a8627b8734d1d1523dd0c40',
  token: process.env.TOKEN_KEY || 'xavierVilaTechToken'
}