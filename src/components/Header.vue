<template>
	<div class="header">
		
		<el-menu 
			:default-active="activeIndex" 
			class="el-menu-demo" 
			mode="horizontal" 
			@select="handleSelect"
		>
		<div class="logo"><img src="@/assets/logo.png" alt=""></div>
		  <div v-for="(item , k) in menu" :key="k">
			  <el-menu-item index="`${k}`" v-if="!item.children">
					<router-link :to="`${item.url}`">
						{{item.name}}
					</router-link>
			  </el-menu-item>
			  <el-submenu index="`${k}`"  v-else>
			    <template slot="title">{{item.name}}</template>
			    <el-menu-item index="`${k}-${index}`" v-for="(value , index) in item.children" :key="index">
			    	<router-link :to="`${value.url}`">
						{{value.name}}
					</router-link>
			    </el-menu-item>
			  </el-submenu>
		  </div>
		  <div>
		  	<el-menu-item index="4" v-if="!this.username">
				<router-link to="/login">
					LOGIN IN
				</router-link>
			</el-menu-item>
			<el-submenu index="5" v-else>
				<template slot="title">{{this.username}}</template>
			    <el-menu-item index="5-0">
					<router-link to="/forget">
						忘记密码
					</router-link>
			    </el-menu-item>
			    <el-menu-item index="5-0">
					<span @click="logout">退出</span>
			    </el-menu-item>
			</el-submenu>
		  </div>
		</el-menu>
	</div>
</template>
<script>
	export default {
		props:{
			
		},
		data(){
			return {
				activeIndex:'0',
				username:'',
				menu:[{
					name: 'Home',
					url: '/home'
				},{
					name: 'Other Database',
					children:[{
						name:'Inactive Ingredient Search for Approved Drug Products（美国FDA批准药物非活性成分数据库）',
						url:'/sfhx'
					},{
						name:'U.S. FDA Drugs Patent Database（美国FDA药品专利数据库）',
						url:'/sfdap'
					},{
						name:'U.S. FDA Orange Book Database（美国FDA药品橙皮书数据库）',
						url:'/sfdac'
					},{
						name:'Reference Listed Drug for Generic Drugs（仿制药参比制剂目录）',
						url:'/sfzy'
					},{
						name:'U.S. FDA Drugs Database（美国FDA药品数据库）',
						url:'/sfda'
					},
					// {
					// 	name:'Molecular dynamics simulation and trajectory analysis of complex biological systems.',
					// 	url:'/service'
					// },{
					// 	name:'Calculation of transition state of small molecule reaction and enzyme reaction.',
					// 	url:'/service'
					// },{
					// 	name:' Prediction of small molecular targets (especially prediction of natural product molecules)',
					// 	url:'/service'
					// },{
					// 	name:'Customized relevant databases.',
					// 	url:'/service'
					// },{
					// 	name:' Network pharmacology analysis of traditional Chinese medicine.',
					// 	url:'/service'
					// }
					]
				},
				// {
				// 	name: 'Service Project',
                //     url: '/contect'
				// },
				{
					name: 'Contact',
					url: '/contect'
				}]
			}
		},
		mounted() {
	      this.username = localStorage.getItem('user');
	      // alert(this.username)
	    },
		methods:{
			handleSelect(key, keyPath) {
		        console.log(key, keyPath);
		    },
		    logout(){
		    	this.$message({
		          message: '退出成功',
		          type: 'success'
		        });
		        this.username = '';
		        localStorage.clear();
		    	this.$router.push('/home')
		    }
		}
	}
</script>
<style scoped lang="scss">
.logo{
//   margin-left:0px;
//   padding-top:0px;
//       width:10px;
//       height:10px;  
  img{width:100px;
     }
    }

	.header{
		width:100%;
		color:#3DF2C5;
		background-color: azure;
		font-size:20px;
		text-align: center;
		min-width:1024px;
		
		padding:15px 10% 0px 10%;
		overflow:hidden;
		ul{
			border:none;
			div{
				li{
					font-size:20px;
					line-height:63px;
					color:#3DF2C5;
				}
			}
		}
		div{
			margin-right:29px;
			float:left;
			display:inline;
			color:#3DF2C5;
			li{
				cursor:pointer;
				a{
					color:#3DF2C5;
				    display: block;
				    width: 100%;
				    height: 100%;
				}
				div{
					color:#3DF2C5;
				}
				&:hover{
					color:#A1ECD9;
					a, div{
						color:#A1ECD9;
					}
					div{
						color:#A1ECD9;
					}
				}
			}
			&:last-child{
				margin-right:0px;
				float:right;
				display:inline;
			}
			
		}
		.floatRight{
			float:right;
			display:inline;
		}
	}
</style>