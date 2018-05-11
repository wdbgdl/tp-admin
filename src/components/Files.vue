<template>
	<div class="file-wrap">
	    <div class="flex-wrap" @contextmenu.prevent>
	        <div class="files-box" v-for="(item,index) in names" @mousedown="mousedown($event, index)" v-on:dblclick="doubleclick($event)">
	        	<div class="img-wrap">
	        		<img src="../assets/img/file2x.png">
	        	</div>
            <input ref="tofocus" :class="names[index].isAdd ? 'nameinput' : ''" type="text" v-model="names[index].key"
                   @change="inputFocus(index)" @keyup="keyup($event)" :readonly="!names[index].isAdd"
                   :autofocus="names[index].isAdd"  @blur="inputblur(index)">
          </div>

	    </div>
	    <ul class="menu-wrap" v-show="menu" ref="menuWrap">
	    	<li @click="handle('del')">删除</li>
	    	<li @click="handle('rename')">重命名</li>
	    	<li @click="handle('move')">移动到</li>
	    	<li @click="handle('share')">分享</li>
	    </ul>
	    <div class="selectfile-wrap" v-show="selectWrap">
	    	<div class="flex-wrap">
	    		<div class="arrow-wrap flex-wrap">
	    			<span class="last-page-wrap">
	    				<span class="last-arrow"></span>
	    			</span>
	    			<span class="next-page-wrap flex-one">
	    				<span class="next-arrow"></span>
	    			</span>
	    		</div>
	    		<p class="title">请选择目标目录</p>
	    	</div>
    		<div class="flex-wrap title_wrap">
    			<div class="flex-one">文件名</div>
    			<div class="mix-time">修改时间</div>
    		</div>
	    	<ul class="file-list">
	    		<li class="flex-wrap file-item" v-for="(item, index) in name" @click="singleclick(index)">
	    			<div class="flex-one">
	    				<img src="../assets/img/file2x.png">
	    				<!-- <span class="files-name">{{item.name}}</span> -->
              <input ref="tofocus2" :class="name[index].isAdd ? 'nameinput' : ''" type="text" v-model="name[index].name"
                     @change="inputFocus(index)" @keyup="keyup($event)" :readonly="!name[index].isAdd"
                     @blur="inputblur2(index)">
            </div>
	    			<div class="mix-time file-time">{{item.time}}</div>
	    		</li>
	    	</ul>
	    	<div class="operate flex-wrap">
	    		<div class="new_file flex-one" @click="newFile">
	    			<span>新建文件夹</span>
	    		</div>
	    		<div>
		    		<span class="cancel" @click="cancel">取消</span>
	  				<span class="moveTo" @click="moveTo" type="primary">移动</span>
	    		</div>
	    	</div>
	    </div>
    </div>
</template>
<script>
import "mock/login.js";
export default {
	data(){
		return{
			menu: false,
			fileIndex:Number,
			selectWrap: false,
      		names: '',
      		name: [
				{
					name:'不可言说的秘密',
					time: '2018.05.05 23:34:00',
					isAdd:false
				},
				{
					name:'不可言说的秘密',
					time: '2018.05.05 23:34:00',
					isAdd:false
				},
				{
					name:'不可言说的秘密',
					time: '2018.05.05 23:34:00',
					isAdd:false
				},
				{
					name:'不可言说的秘密',
					time: '2018.05.05 23:34:00',
					isAdd:false
				},
				{
					name:'不可言说的秘密',
					time: '2018.05.05 23:34:00',
					isAdd:false
				}
			]
		}
	},
	created(){
	  	this.names = this.postnames
	},
	props:{
    	postnames: Array
	},
	methods: {
	    toFocus () { // 父组件调用方法
	      this.$refs.tofocus[0].focus()
	    },
	    inputFocus(index){
			this.names[index].key = this.names[index].key
		},
		keyup(event){
			if(event.keyCode == "13"){
			}
		},
    	inputblur(index){ // 失焦不可点击
			if(this.names[index].isAdd){
				this.names[index].isAdd = !this.names[index].isAdd
			}
		},
    	inputblur2(index){ // 失焦不可点击
	        if(this.name[index].isAdd){
	          this.name[index].isAdd = !this.name[index].isAdd
	        }
	    },
      	mousedown(event,index){
			this.fileIndex = index
			if(event.button === 2){
				let that = this;
				// event.stopPropagation()
		        this.$refs.menuWrap.style.left = (event.clientX - 175) + 'px'
		        this.$refs.menuWrap.style.top = (event.clientY -131) + 'px'
				this.menu = true
				document.body.onclick=function(event){
					if(event.button === 0 && that.menu === true){
						that.menu = false
					}
				}
			} else if(event.button === 0){
				/*for(let i = 0;i < this.names.length; i++){
					if(this.names[i].isAdd){
						this.names[i].isAdd = !this.names[i].isAdd;
					}
				}*/
			}
		},
		handle(type){
			if(type === 'del'){
				this.names.splice(this.fileIndex, 1)
			} else if(type === 'rename'){
				this.names[this.fileIndex].isAdd = !this.names[this.fileIndex].isAdd
        		this.$refs.tofocus[this.fileIndex].focus()
      		} else if(type === 'move') {
				this.selectWrap = true
			} else{

			}
		},
		doubleclick(event) {
			this.$axios({
	            url: "getFile",
	            method: "GET"
	        }).then(res => {
	            this.names = res.data.data.Files;
	        });
		},
		cancel(){
			this.selectWrap = false
		},
		singleclick(index) {
			if(this.name[index].isAdd){
				return false;
			}
			this.name = [
				{
					name:'苍老师',
					time: '2018.05.05 23:34:00',
					isAdd:false
				},
				{
					name:'上原亚衣',
					time: '2018.05.05 23:34:00',
					isAdd:false
				},
				{
					name:'天海翼',
					time: '2018.05.05 23:34:00',
					isAdd:false
				},
				{
					name:'美祢藤',
					time: '2018.05.05 23:34:00',
					isAdd:false
				},
				{
					name:'大桥未久',
					time: '2018.05.05 23:34:00',
					isAdd:false
				}
			]
		},
		newFile() {
			this.name.unshift({name:'新建文件夹',time: '2018.05.05 23:34:00',isAdd:true})
      		this.$refs.tofocus2[0].focus()
    	},
		moveTo() {

		}
	}
}
</script>
<style scoped lang="less">
.flex-wrap{
	display:flex;
	flex-wrap: wrap;
}
.flex-one{
	flex:1;
}
.file-wrap{
	position:relative;
}
.files-box{
	width:150px;
	height:150px;
	border:1px dashed gray;
	margin:20px;
	text-align:center;
	.img-wrap{
		padding-top:10px;
		height:110px;
		img{
			width:70%;
			height:100px;
		}
	}
	input{
		width:80px;
		height:20px;
		line-height:20px;
		margin:0;
		border:none;
		outline:none;
		text-align:center;
	}
	.nameinput{
	    border:1px solid #28a3ef;
	    border-radius: 2px;
	    text-align: left;
	    padding-left: 5px;
  	}
}
.files-box:hover{
	border:1px dashed blue;
}
.menu-wrap{
	list-style:none;
	position:absolute;
	background:#fff;
    border: 1px solid #cccccc;
    border-radius: 3px;
    padding:0;
    box-shadow: 2px 2px 0px 0px rgba(0, 0, 0, 0.1);
    li{
		height:25px;
		line-height:25px;
	    width:100px;
	    font-size: 14px;
	    text-align:center;
	    padding: 3px 5px;
	    margin: 1px;
	    color: #777777;
	    cursor: pointer;
	}
    li:hover{
	    color: white;
	    background: #28a3ef;
  	}
}
.selectfile-wrap{
	width:500px;
	height:300px;
	max-height:300px;
	margin: 0 auto;
	box-shadow: 0px 0px 1px 1px rgba(0,0,0,0.1);
	position: absolute;
    left: 50%;
    margin-left: -250px;
    top: 50%;
    background: #fff;
    .arrow-wrap{
    	width:60px;
    	height:20px;
    	margin-top:5px;
    	margin-left:20px;
    	border-radius:5px;
    	border:1px solid #ccc;
    	.last-page-wrap{
    		width: 29px;
		    height: 20px;
		    display: inline-block;
		    border-right: 1px solid #ccc;
		    text-align: center;
    		line-height: 20px;
		    .last-arrow{
		    	width:8px;
		    	height:8px;
		    	display:inline-block;
		    	border:1px solid #ccc;
		    	border-right:none;
		    	border-bottom:none;
		    	transform: rotate(-45deg);
		    }
    	}
    	.next-page-wrap{
		    height: 20px;
		    display: inline-block;
		    text-align: center;
    		line-height: 20px;
    		.next-arrow{
		    	width:8px;
		    	height:8px;
		    	display:inline-block;
		    	border:1px solid #ccc;
		    	border-left:none;
		    	border-top:none;
		    	transform: rotate(-45deg);
		    }
    	}
    }
	.title{
		text-align:center;
		height:30px;
		line-height:30px;
		font-size:13px;
		font-weight:500;
		margin:0 auto;
		margin-left:120px;
	}
	.title_wrap{
		height:25px;
		line-height:25px;
		font-size:12px;
		background:#f9f9f9;
		padding-left:15px;
		color:#666;
		.mix-time{
			width:200px;
		}
	}
}
.file-list{
	list-style:none;
	padding:0;
	margin:0;
	overflow: scroll;
    height: 205px;
	li{
		font-size:12px;
		color:#333;
		padding-left:15px;
		.mix-time{
			width:200px;
		}
		img{
			width:25px;
			height:25px;
		}
		input{
			vertical-align: super;
			cursor: pointer;
			border: none;
			background:#fff;
			outline:none;
	      	width: 78px;
	      	height: 22px;
    	}
		input:nth-child(2n){
			background:#f9f9f9;
		}
    	.nameinput{
	      	border:1px solid #28a3ef;
	      	border-radius: 2px;
	      	text-align: left;
	      	padding-left: 5px;
	    }
	    .file-time{
			line-height:30px;
		}
	}
	li:nth-child(2n){
		background:#f9f9f9;
	}
	li:nth-child(2n+1){
		input{
			background:#fff;
		}
	}
	li:hover{
		background:#eee;
		input{
			background:#eee;
		}
	}
	.file-item{
		color:#000;
	}
}
.operate{
	position: absolute;
    bottom: 0;
    width: 100%;
    height: 40px;
    text-align: right;
    font-size:12px;
    background:#f5f5f5;
    border-top:1px solid #d8dce5;
    line-height: 40px;
    overflow:hidden;
    .new_file{
    	text-align:left;
    	span{
    		display:inline-block;
	    	width:80px;
	    	height:20px;
	    	line-height:20px;
	    	border-radius:5px;
	    	border:1px solid #d8dce5;
	    	text-align:center;
	    	color:5a5e66;
	    	background:#fff;
	    	cursor: pointer;
	    	margin-left:20px;
    	}
    }
    .cancel{
    	display:inline-block;
    	width:50px;
    	height:20px;
    	line-height:20px;
    	border-radius:5px;
    	border:1px solid #d8dce5;
    	text-align:center;
    	color:5a5e66;
    	background:#fff;
    	cursor: pointer;
    }
    .moveTo{
    	display:inline-block;
    	width:50px;
    	height:20px;
    	line-height:20px;
    	border-radius:5px;
    	background:#409EFF;
    	text-align:center;
    	color:#fff;
    	margin-right: 20px;
    	cursor: pointer;
    }
}
</style>
