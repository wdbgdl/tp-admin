import { 
  GET_FILE_LIST,
  DEL_FILE_ID } from '../mutation-types';
const common = {
    state: {
        isCollapse: false,
        chartTheme: ["#2ec7c9", "#b6a2de", "#5ab1ef", "#ffb980", "#d87a80", "#8d98b3", "#e5cf0d", "#97b552", "#95706d", "#dc69aa", "#07a2a4", "#9a7fd1", "#588dd5", "#f5994e", "#c05050", "#59678c", "#c9ab00", "#7eb00a", "#6f5553", "#c14089"],
        getfile:[]
    },
    mutations: {
        toggleSiderBar(state) {
            state.isCollapse = !state.isCollapse
        },
        [GET_FILE_LIST](state, { data }) {
		    state.getfile = data
		},
		[DEL_FILE_ID](state, { index }) {
		    state.getfile.splice(index, 1)
		}
    },
    getters: {
    	getFileList(state) {
	    	return state.getfile;
	  	},
    },
    actions: {
    	toGetFileList: ({ commit, stat }, { param }) => { // 获取文件夹
    		let data;
  			if(param.id == 1){
            	data = [
                    {key:'本地数据',isAdd:false, id:11},
                    {key:'手机数据',isAdd:false, id:12},
                    {key:'临时数据',isAdd:false, id:13},
                ]
            }
            else if(param.id == 2){
            	data = [
                    {key:'JS',isAdd:false, id:21},
                    {key:'CSS',isAdd:false, id:22},
                    {key:'Images',isAdd:false, id:23},
                    {key:'Jquery',isAdd:false, id:24},
                ]
            }
            else if(param.id == 3){
            	data = [
                    {key:'Bean',isAdd:false, id:31},
                    {key:'Class',isAdd:false, id:32},
                    {key:'Spring',isAdd:false, id:33},
                    {key:'Struts',isAdd:false, id:34},
                    {key:'Mybatis',isAdd:false, id:35},
                    {key:'Service',isAdd:false, id:35}
                ]
            } else{
            	data = []
            }


            if(param.id == 11){
            	data = [
                    {key:'C盘',isAdd:false, id:111},
                    {key:'D盘',isAdd:false, id:112},
                    {key:'F盘',isAdd:false, id:113},
                ]
            }
            if(param.id == 12){
            	data = [
                    {key:'手机相册',isAdd:false, id:121}
                ]
            }
            commit(GET_FILE_LIST, { data });
  		},
  		delFile: ({ commit, state }, { param }) => {
  			// console.log(state.getfile, param.id)
  			for(let index in state.getfile) {
  				// console.log(index)
  				if(state.getfile[index].id === param.id){
  					// state.getfile.splice(index, 1)
  					// console.log(state.getfile)
  					commit(DEL_FILE_ID, {index})
  				}
  			}
  		}
    }
}

export default common
