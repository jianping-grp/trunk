<template>
  <div class="home">
    <Header></Header>
    <div class="banner">
      <div class="tip">
        <!-- <div class="logo"><img src="@/assets/logo.png" alt=""></div> -->
        This is a drug data search system.
      </div>
      <div class="searchBox">
        
        
        <el-input 
          :placeholder="content"  
          v-model="searchinput" 
          :autofocus="true"
          @keyup.enter.native="searchClick"
        >
          <el-button 
            slot="append"
            @keyup.enter.native="searchClick"
            @click="searchClick"
          >
            SEARCH
          </el-button>
        </el-input>
      </div>
      <div class="navMenu">
        <ul>
          <li 
            v-for="(item , k) in navMenuList" 
            @click="menuClick(k)" 
            :class="clickIndex ==  k ? 'active':''"
          >
            <i :class="item.icon"></i>
            <span>{{item.text}}</span>
          </li>
        </ul>
      </div>
    </div>
    <!-- 新闻轮播页面 -->
    <!-- <div class="carousel"> -->
      <!-- <el-row>
        <el-col :span="8" v-for="(o, index) in 3" :key="index" class="carousel-item">
          <el-card :body-style="{ padding: '15px' }">
            新闻区域
          </el-card>
        </el-col>
      </el-row> -->
      <!-- <el-row :gutter="20">
  <el-col :span="8"><div class="grid-content bg-purple" style="width:400px; height:300px;margin-left:50px;margin-top:50px;"> <img src='../../build/1.jpg' width="100%" height="100%"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple" style="width:400px; height:300px;margin-top:50px;"> <img src='../../build/2.jpg' width="100%" height="100%"></div></el-col>
  <el-col :span="8"><div class="grid-content bg-purple" style="width:400px; height:300px;margin-top:50px;margin-right:0px;"> <img src='../../build/3.png' width="100%" height="100%"></div></el-col>

</el-row> -->
<div class="block">
    <el-carousel trigger="click" height="400px">
      <el-carousel-item >
       <img src='../../build/1.jpg' width="600px" height="400px" >
      </el-carousel-item>
            <el-carousel-item >
       <img src='../../build/2.jpg' width="600px" height="400px">
      </el-carousel-item>
             <el-carousel-item >
       <img src='../../build/3.png' width="600px" height="400px">
      </el-carousel-item>     
    </el-carousel>
  </div>
<!-- <div class='lunbo'>
  <swiper  ref="mySwiper" :options="swiperOptions">

                 <div class="swiper-slide"><img src='../../build/1.jpg' width="600px" height="400px" ></div>
                 <div class="swiper-slide"><img src='../../build/2.jpg' width="600px" height="400px"></div>
                 <div class="swiper-slide"><img src='../../build/3.png' width="600px" height="400px"></div>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div> -->
<div class='news'>
  <h3 color="#A1ECD9"> 新闻中心</h3>
<ul>
  <li class='new'>
 <i class="el-icon-edit"></i><a href="">党委理论中心组传达学习习近平在科学家座谈会上的重要讲话  [2020-09-27]</a>
  </li>
    <li class='new'>
 <i class="el-icon-edit"></i><a href="">研究院入驻企业人才在“海河英才”创业大赛获奖  [2020-09-25]</a>
  </li>
      <li class='new'>
 <i class="el-icon-edit"></i><a href="">天津市生物医药产业“十四五”规划企业座谈会在我院召开 [2020-09-22]</a>
  </li>
      <li class='new'>
 <i class="el-icon-edit"></i><a href="">研究院与尚德药缘公司深度交流对接  [2020-09-21]</a>
  </li>
  </ul>
    


</div>
</div>
</template>

<script>
  import Header from '@/components/Header'
  // import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  // import "../../node_modules/swiper/swiper-bundle.min.css";
  export default {
    name: "Home",
    components:{
      // Swiper,
      // SwiperSlide,
      Header
    },
  //   directives: {
  //   swiper: directive
  // },
    data() {     
      return {   
        // swiperOptions: {
        //   pagination: {
        //     el: '.swiper-pagination'
        //   },
        //   loop:true,
        //    speed:400,
        //   // Some Swiper option/callback...
        // },
        searchinput:'',
        clickIndex:-1,
        content:'Please enter the search criteria',
        navMenuList:[{
          icon:'el-icon-edit',
          text:'CLINICAL'
        },{
          icon:'el-icon-edit',
          text:'STATISTICAL CHART'
        },{
          icon:'el-icon-edit',
          text:'MOLECULE STUCTURE'
        }],
      }
    },
    computed: {
      // swiper() {
      //   return this.$refs.mySwiper.$swiper
      // }
    },
    mounted() {
//  this.swiper.slideTo(5, 20000, true)
    },
    methods: {
      menuClick(k){
        this.clickIndex = k;
        if(k == 0 ){
          this.content='drug dinical information'
          return;
        }
        ;
        if(k == 1){
         this.content='statisticalChart information';
         return;
        }
        if(k == 2){
          this.$router.push('/moleculeStucture');
        }
      },
      searchClick(){
        if(this.clickIndex==-1){
          this.$router.push(`/searchResult/${this.searchinput}`)
        }
        if(this.clickIndex==0){
          this.$router.push(`/clinicalResult/${this.searchinput}`)
        }
       if(this.clickIndex==1){
          this.$router.push(`/statisticalChart/${this.searchinput}`)
          console.log(this.searchinput)
        }
        // this.$router.push(this.clickIndex == 0 ? '/clinicalResult':'/searchResult');
        console.log(this.searchinput)
      }

    }
  }
</script>

<style scoped lang="scss">
  // .logo{
  //   width:30px;
  //   background:#fff;
  //   // min-width:1024px;
  //   padding:15px 10%;}
.logo{
  margin-left:380px;
  padding-top:30px;
      width:10px;
      height:10px;  
  img{width:100px;
     }
    }
 .swiper-container{
    --swiper-theme-color: #ff6600;
    --swiper-pagination-color: #00ff33;/* 两种都可以 */
  }
  .new{
    font-size:30px;
    line-height: 60px;
    color: #A1ECD9;
  }
  h3{
    color: #84b2e6;
  }
  a{
    color: #84b2e6;
  }
  .news{
 margin-top: 60px;
    margin-left:800px;
    font-size:40px;
  }
.block{
  width: 600px;
  margin-left: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
  float:left;
}
  .home{
    width:100%;
    .carousel{
      width:70%;
      margin:0 auto;
      background:#FBFBFB;
      padding:20px;
      margin-top:40px;
      .carousel-item{
        padding:10px;
        height:360px;
        // overflow:hidden;
        .el-card{
          height:100%;
        }
      }
    }
    .grid-content{
      margin-right:50px;
    }
      .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
    .banner{
      height:440px;
      overflow:hidden;
      background: #3DF2C5 100%;
      width:100%;
      min-width:1024px;
      padding:0px 10%;
      color:#fff;
      font-size:14px;
      text-align:center;
      .tip{
        font-size:36px;
        margin-top:120px;
        margin-bottom:35px;
      }
      .searchBox{
        min-width:700px;
        width:60%;
        margin:0 auto;
        border-color:#bbb;
        input{
          color:#000;
          font-size:16px;
        }
        button{
          background:#A1ECD9 100%;
          color:#fff;
          border-radius: initial;
        }
      }
      .navMenu{
          min-width: 700px;
          width: 60%;
          margin: 0 auto;
          margin-top:15px;
        ul{
          li{
            display:block;
            float:left;
            display:inline;
            width:180px;
            height:60px;
            overflow:hidden;
            background:#FFFFFF 100%;
            border-radius:100px;
            -webkit-border-radius:100px;
            color:#EC96DE;
            text-align:left;
            display:flex;
            justify-content: center;
            align-items: center;
            margin-right:20px;
            padding:0px 5px;
            i{
              width:24px;
              height:24px;
              font-size:24px;
            }
            span{
              display:block;
              font-size:12px;
              word-break: break-all;
              margin-left:2px;
            }
            &:hover,&.active{
              background:#A1ECD9;
              cursor:pointer;
              color:#fff;
            }
          }
        }
      }
    }
  }
</style>
