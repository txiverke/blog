import reducers from '../reducers';

describe('Reducers', () => {
  xit('should load Stats', () => {
    const state = reducers({statistic:{completed:false,data:{},message:'Loading statistics.',error:false},user:{completed:false,data:{},message:'',error:false},posts:{completed:false,data:[],message:'',error:false},item:{completed:false,data:{},message:'',error:false},projects:{completed:false,data:[],message:'',error:false},authenticate:{completed:false,data:'',message:'',error:false},tags:{completed:false,data:[],message:'',error:false},language:{current:'eng'}}, {type:'LOAD_STATS_SUCCESS',payload:{posts:2,users:1,projects:1}});
    expect(state).toEqual({statistic:{completed:true,data:{posts:2,users:1,projects:1},message:'Statistics loaded.',error:false},user:{completed:false,data:{},message:'',error:false},posts:{completed:false,data:[],message:'',error:false},item:{completed:false,data:{},message:'',error:false},projects:{completed:false,data:[],message:'',error:false},authenticate:{completed:false,data:'',message:'',error:false},tags:{completed:false,data:[],message:'',error:false},language:{current:'eng'}});
  });
})
