import { 
  GET_FILE_LIST,
  DEL_FILE_ID,
  RENAME_FILE_ID } from '../mutation-types';
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
		},
		[RENAME_FILE_ID](state, { index, param }) {
		    state.getfile[index].isAdd = true
		    if(param.type){
		    	state.getfile[index].isAdd = false
		    }
		    if(param.value){
		    	state.getfile[index].key = param.value
		    }
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
    		if(param.type === 'init'){
    			data = [
    				{name:'新建文件夹',isAdd:false, time: '2018.05.05 23:34:00', id:1},
	                {name:'HTML',isAdd:false, time: '2018.05.05 23:34:00', id:2},
	                {name:'JAVA',isAdd:false, time: '2018.05.05 23:34:00', id:3},
	                {name:'PHP',isAdd:false, time: '2018.05.05 23:34:00', id:4},
	                {name:'C++',isAdd:false, time: '2018.05.05 23:34:00', id:5}
    			]
    		}else if(param.type === 'new'){
    			data = [
    				{name:'新建文件夹',isAdd:false, time: '2018.05.05 23:34:00', id:1},
	                {name:'HTML',isAdd:false, time: '2018.05.05 23:34:00', id:2},
	                {name:'JAVA',isAdd:false, time: '2018.05.05 23:34:00', id:3},
	                {name:'PHP',isAdd:false, time: '2018.05.05 23:34:00', id:4},
	                {name:'C++',isAdd:false, time: '2018.05.05 23:34:00', id:5}
    			]
    			data.unshift({
		    		name:'新建文件夹',isAdd:true, time: '2018.05.05 23:34:00', id:7
		    	})
    		}else{
	  			if(param.id == 1){
	            	data = [
	                    {name:'本地数据',isAdd:false, time: '2018.05.05 23:34:00', id:11},
	                    {name:'手机数据',isAdd:false, time: '2018.05.05 23:34:00', id:12},
	                    {name:'临时数据',isAdd:false, time: '2018.05.05 23:34:00', id:13},
	                ]
	            }
	            else if(param.id == 2){
	            	data = [
	                    {name:'JS',isAdd:false, time: '2018.05.05 23:34:00', id:21},
	                    {name:'CSS',isAdd:false, time: '2018.05.05 23:34:00', id:22},
	                    {name:'Images',isAdd:false, time: '2018.05.05 23:34:00', id:23},
	                    {name:'Jquery',isAdd:false, time: '2018.05.05 23:34:00', id:24},
	                ]
	            }
	            else if(param.id == 3){
	            	data = [
	                    {name:'Bean',isAdd:false, time: '2018.05.05 23:34:00', id:31},
	                    {name:'Class',isAdd:false, time: '2018.05.05 23:34:00', id:32},
	                    {name:'Spring',isAdd:false, time: '2018.05.05 23:34:00', id:33},
	                    {name:'Struts',isAdd:false, time: '2018.05.05 23:34:00', id:34},
	                    {name:'Mybatis',isAdd:false, time: '2018.05.05 23:34:00', id:35},
	                    {name:'Service',isAdd:false, time: '2018.05.05 23:34:00', id:35}
	                ]
	            } else{
	            	data = []
	            }


	            if(param.id == 11){
	            	data = [
	                    {name:'C盘',isAdd:false, time: '2018.05.05 23:34:00', id:111},
	                    {name:'D盘',isAdd:false, time: '2018.05.05 23:34:00', id:112},
	                    {name:'F盘',isAdd:false, time: '2018.05.05 23:34:00', id:113},
	                ]
	            }
	            if(param.id == 12){
	            	data = [
	                    {name:'手机相册',isAdd:false, time: '2018.05.05 23:34:00', id:121}
	                ]
	            }
            }
            commit(GET_FILE_LIST, { data });
  		},
  		delFile: ({ commit, state }, { param }) => { // 删除文件
  			// console.log(state.getfile, param.id)
  			for(let index in state.getfile) {
  				// console.log(index)
  				if(state.getfile[index].id === param.id){
  					// state.getfile.splice(index, 1)
  					// console.log(state.getfile)
  					commit(DEL_FILE_ID, {index})
  				}
  			}
  		},
  		renameFile: ({ commit, state }, {param}) => { // 重命名文件
  			for(let index in state.getfile) {
  				// console.log(index)
  				if(state.getfile[index].id === param.id){
  					// state.getfile.splice(index, 1)
  					// console.log(state.getfile)
  					commit(RENAME_FILE_ID, {index, param})
  				}
  			}
  		}
    }
}

export default common
