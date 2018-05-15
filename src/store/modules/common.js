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
        nextfile(state, id){
            if(id == 1){
            	state.getfile = [
                    {key:'本地数据',isAdd:false, id:11},
                    {key:'手机数据',isAdd:false, id:12},
                    {key:'临时数据',isAdd:false, id:13},
                ]
            }
            else if(id == 2){
            	state.getfile = [
                    {key:'JS',isAdd:false, id:21},
                    {key:'CSS',isAdd:false, id:22},
                    {key:'Images',isAdd:false, id:23},
                    {key:'Jquery',isAdd:false, id:24},
                ]
            }
            else if(id == 3){
            	state.getfile = [
                    {key:'Bean',isAdd:false, id:31},
                    {key:'Class',isAdd:false, id:32},
                    {key:'Spring',isAdd:false, id:33},
                    {key:'Struts',isAdd:false, id:34},
                    {key:'Mybatis',isAdd:false, id:35},
                    {key:'Service',isAdd:false, id:35}
                ]
            } else{
            	state.getfile = []
            }


            if(id == 11){
            	state.getfile = [
                    {key:'C盘',isAdd:false, id:111},
                    {key:'D盘',isAdd:false, id:112},
                    {key:'F盘',isAdd:false, id:113},
                ]
            }
            if(id == 12){
            	state.getfile = [
                    {key:'手机相册',isAdd:false, id:121}
                ]
            }
        }
    }
}

export default common
