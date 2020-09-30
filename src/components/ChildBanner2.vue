<template>
  <div class="childBanner">
    <Header></Header>
    <div class="banner">
      <div class="searchBox">
        <el-input 
          placeholder=""  
          v-model.trim="searchinput" 
          :autofocus="true"
        >
          <el-select 
            v-model="select" 
            slot="prepend" 
            placeholder="请选择" 
            class="selectBox"
            v-if="show"
          >
            <el-option label="Clinical" value="Clinical"></el-option>
            <el-option label="drug" value="drug"></el-option>
            <el-option label="STATISTICAL CHART" value="STATISTICAL CHART"></el-option>
          </el-select>
          <el-button 
            slot="append"
            @keyup.enter="searchClick"
            @click="searchClick"
            class='search'
          >
            SEARCH
          <!-- <router-link to="/searchResult/12"></router-link> -->
          </el-button>
        </el-input>
      </div>
    </div>
  <!-- <div class="zhen">
    <div class="fenzhen"></div>
    <div class="miaozhen"></div>
  </div> -->
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    name: "ChildBanner",
    components:{
      Header
    },
    props:{
      show:{
        type:Boolean,
        default: false
      }
    },
    data() {
      return {
        searchinput:'',
        select: 'Clinical',
        clickIndex:0,
      }
    },
    mounted() {
      
    },
    methods: {
      searchClick(){
        if(!this.select){
          this.$router.push({path:`/searchResult/${this.searchinput}`});
        }
        else {if(this.select=='Clinical'){
          this.$router.push({path:`/clinicalResult/${this.searchinput}`})
          console.log('1')
        }
        else{
          this.$router.push({path:`/searchResult/${this.searchinput}`})
          console.log('2')
        }}
      }
    }
  }
</script>

<style scoped lang="scss">
// .zhen{
//   width:400px;height:400px;
//   margin: 0 auto;
//   // background: #000;
//   border:5px solid;
//   border-color: #3DF2C5;
//   border-radius: 50%;
//   position: relative;
// }
// .fenzhen{
//   width:10px;height: 70px;
//   background-color: #bbb;
//   position: absolute;
//   right:195px;bottom: 200px;
//   animation: change 3600s linear 0s infinite normal ;

// }
// @keyframes change{0%{transform: rotate(0deg);transform-origin: center bottom;}100%{transform: rotate(360deg);transform-origin: center bottom;}}
// .miaozhen{
//   width:6px;height: 100px;
//   background-color: #A1ECD9;
//   position: absolute;
//   right:197px;bottom: 200px;
//   animation: change 60s linear 0s infinite normal ;
// }
  .childBanner{
    width:100%;
    .banner{
      height:150px;
      overflow:hidden;
      background: #3DF2C5 100%;
      width:100%;
      min-width:1024px;
      padding:0px 10%;
      color:#fff;
      font-size:14px;
      text-align:center;
      .searchBox{
        min-width:700px;
        width:60%;
        margin:0 auto;
        margin-top:50px;
        border-color:#bbb;
        button:hover{
        transform: scale(1.5)
        }
        .selectBox{
          width:130px;
          background:#fff;
          border:none;
          height:38px;
        }
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
    }
  }
</style>