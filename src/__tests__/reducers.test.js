import reducers from '../reducers';

describe('Reducers', () => {
  it('should fail with no authentication', () => {
    const state = reducers({statistic:{completed:false,data:{},message:''},user:{completed:false,data:{},message:''},login:{completed:false,data:'',message:''},authenticate:{completed:false,data:'',message:'Authenticating user.'}}, {type:'IS_AUTHENTICATE_FAILURE'});
    expect(state).toEqual({statistic:{completed:false,data:{},message:''},user:{completed:false,data:{},message:''},login:{completed:false,data:'',message:''},authenticate:{completed:true,data:'',message:'Authentication denied.'}});
  });

  it('should fail with wrong data', () => {
    const state = reducers({statistic:{completed:false,data:{},message:''},user:{completed:false,data:{},message:''},login:{completed:false,data:'',message:'Login user.'},authenticate:{completed:true,data:'',message:'Authentication denied.'}}, {type:'LOG_IN_USER_FAILURE'});
    expect(state).toEqual({statistic:{completed:false,data:{},message:''},user:{completed:false,data:{},message:''},login:{completed:true,data:'',message:'Login denied.'},authenticate:{completed:true,data:'',message:'Authentication denied.'}});
  });

  it('should login with correct data', () => {
    const state = reducers({statistic:{completed:false,data:{},message:''},user:{completed:false,data:{},message:''},login:{completed:false,data:'',message:'Login user.'},authenticate:{completed:true,data:'',message:'Authentication denied.'}}, {type:'LOG_IN_USER_SUCCESS',payload:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTVlOGQ5NTFlMTVlMWEzOWI3ZDhiMDkiLCJpYXQiOjE1MTYzODUzMTMsImV4cCI6MTUxNjM5OTcxM30.SeZaqyZzBaiXX-rZss8bTzNkNPBK6JO6NocUXdAGEfg'});
    expect(state).toEqual({statistic:{completed:false,data:{},message:''},user:{completed:false,data:{},message:''},login:{completed:true,data:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTVlOGQ5NTFlMTVlMWEzOWI3ZDhiMDkiLCJpYXQiOjE1MTYzODUzMTMsImV4cCI6MTUxNjM5OTcxM30.SeZaqyZzBaiXX-rZss8bTzNkNPBK6JO6NocUXdAGEfg',message:'User logged.'},authenticate:{completed:true,data:'',message:'Authentication denied.'}});
  });

  it('should authenticate using the token', () => {
    const state = reducers({statistic:{completed:false,data:{},message:''},user:{completed:false,data:{},message:''},login:{completed:true,data:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTVlOGQ5NTFlMTVlMWEzOWI3ZDhiMDkiLCJpYXQiOjE1MTYzODUzMTMsImV4cCI6MTUxNjM5OTcxM30.SeZaqyZzBaiXX-rZss8bTzNkNPBK6JO6NocUXdAGEfg',message:'User logged.'},authenticate:{completed:true,data:'',message:'Authentication denied.'}}, {type:'IS_AUTHENTICATE_SUCCESS',payload:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTVlOGQ5NTFlMTVlMWEzOWI3ZDhiMDkiLCJpYXQiOjE1MTYzODUzMTMsImV4cCI6MTUxNjM5OTcxM30.SeZaqyZzBaiXX-rZss8bTzNkNPBK6JO6NocUXdAGEfg'});
    expect(state).toEqual({statistic:{completed:false,data:{},message:''},user:{completed:false,data:{},message:''},login:{completed:true,data:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTVlOGQ5NTFlMTVlMWEzOWI3ZDhiMDkiLCJpYXQiOjE1MTYzODUzMTMsImV4cCI6MTUxNjM5OTcxM30.SeZaqyZzBaiXX-rZss8bTzNkNPBK6JO6NocUXdAGEfg',message:'User logged.'},authenticate:{completed:true,data:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTVlOGQ5NTFlMTVlMWEzOWI3ZDhiMDkiLCJpYXQiOjE1MTYzODUzMTMsImV4cCI6MTUxNjM5OTcxM30.SeZaqyZzBaiXX-rZss8bTzNkNPBK6JO6NocUXdAGEfg',message:'User authenticated.'}});
  });

  
})
