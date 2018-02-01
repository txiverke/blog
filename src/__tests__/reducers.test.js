import reducers from '../reducers';

describe('Reducers', () => {
  xit('should update statistic state based on LOAD_STATS_REQUEST action', () => {
    const state = reducers({statistic:{completed:false,data:{},message:'Loading statistics.',error:false},user:{completed:false,data:{},message:'',error:false},authenticate:{completed:false,data:'',message:'',error:false}}, {type:'LOAD_STATS_SUCCESS',payload:{posts:2,users:1,projects:2}});
    expect(state).toEqual({statistic:{completed:true,data:{posts:2,users:1,projects:2},message:'Statistics loaded.',error:false},user:{completed:false,data:{},message:'',error:false},authenticate:{completed:false,data:'',message:'',error:false}});
  })

  xit('should update user state based on LOAD_USER_DATA_SUCCESS action', () => {
    const state = reducers({statistic:{completed:true,data:{posts:2,users:1,projects:2},message:'Statistics loaded.',error:false},user:{completed:false,data:[],message:'Loading User Data',error:false},authenticate:{completed:false,data:'',message:'',error:false}}, {type:'LOAD_USER_DATA_SUCCESS',payload:{bio:'Versatile Front-end Developer with lots of experience in HTML\nand CSS implementation, Cross-browser and Responsive design.\nWide range of professional experience in j avascript using several\nframeworks, libraries and vanilla js. Experience in agile working\nenvironments and Scrum methodology.',firstname:'Xavi',job:'frontend developer',lastname:'Vilà',username:'txiverke'}});
    expect(state).toEqual({statistic:{completed:true,data:{posts:2,users:1,projects:2},message:'Statistics loaded.',error:false},user:{completed:true,data:{bio:'Versatile Front-end Developer with lots of experience in HTML\nand CSS implementation, Cross-browser and Responsive design.\nWide range of professional experience in j avascript using several\nframeworks, libraries and vanilla js. Experience in agile working\nenvironments and Scrum methodology.',firstname:'Xavi',job:'frontend developer',lastname:'Vilà',username:'txiverke'},message:'User data loaded.',error:false},authenticate:{completed:false,data:'',message:'',error:false}});
  });
})
