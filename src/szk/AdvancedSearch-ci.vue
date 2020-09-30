<template>
  <div>
    <div class="service">
      <!-- <ChildBanner></ChildBanner>-->
      <Header></Header>
        <div class="width85">
            <!-- 化学物质索引数据库 -->
            <h3>化学物质索引数据库</h3>
            <h4>Chemical Index Database</h4>
            <div class="content">
                <div class="searchtext"> <i class="el-icon-search"></i><b>高级搜索</b></div>
                <div class="row"><div class="name">物质名称(英文名)：</div><el-input v-model="input1" placeholder="请输入内容">&nbsp;</el-input></div>
                <div><div class="name">CA登记号(CAS Registry Number)：</div><el-input v-model="input2" placeholder="请输入内容"></el-input> 注:美国化学文摘登记号</div>
                <div><div class="name">分子量(Molecular Weight)：</div><el-input v-model="input3" placeholder="请输入内容"></el-input></div>
                <div><div class="name">分子式(Molecular Formula)：</div><el-input v-model="input4" placeholder="请输入内容"></el-input> 如:C16H21N7O7S3,C17H15N3O6.</div>
                <div><div class="name">油水分配系数(LogP)：</div><el-input v-model="input5" placeholder="请输入内容"></el-input> 注:可仅输入大致LogP值</div>
                <div><div class="name">毒性数据(Toxicity)：</div><el-input v-model="input6" placeholder="请输入内容"></el-input></div>
                <div class="name"></div><el-button  v-on:click="getdata" type="primary">查询</el-button><el-button  v-on:click="cleardata" type="info">清除</el-button>
                <div class="searchtext2"> <i class="el-icon-search"></i><b>数据库说明</b></div>
                <div class="text">1、本数据库为化学物质特性数据库，包含大量具药理活性及生物活性的物质性质信息数据。
2、检索条件支持模糊查询，各输入条件间的检索关系为逻辑与（即AND关系）。</div>
            </div>
            <!-- 化学物质索引数据库 -->  
        </div>
    </div>
  </div>
</template>
<script>
  //  import ChildBanner from '@/components/ChildBanner'
   import Header from '@/components/Header'
  export default {
    name: "AdvancedSearchfhx",
    components:{
      // ChildBanner
      Header
    },
    data() {
      return {
          tableData:[],
          total:{},
          fzy:'',
          str1:'title',
          str2:'',
          str3:'',
          str4:'',
          str5:'',
          str6:'',
          input6:'',
          input1:'',
          input2:'',
          input3:'',
          input4:'',
          input5:'',

      }
    },
    mounted() {            
    },
        methods:{
      getdata(){
        // if(this.input1!==''){
        //    this.input1="inactive_ingredient="+this.input1.toUpperCase()+"&"
        // };
        // if(this.input2!==''){
        //    this.input2="route="+this.input2.toUpperCase()+"&"
        // };        
        // if(this.input3!==''){
        //    this.input3="dosage_form="+this.input3.toUpperCase()+"&"
        // };
        // if(this.input4!==''){
        //    this.input4="cas_numbers="+this.input4.toUpperCase()+"&"
        // };
        // if(this.input5!==''){
        //    this.input5="UNII="+this.input5.toUpperCase()
        // }; 
        if(this.input1!==''){
           this.input1=this.input1
          //  this.str1="*active_ingredient"
        };
        if(this.input2!==''){
          this.input2='*'+this.input2
           this.str2="*CAS_registry_number"
        };        
        if(this.input3!==''){
          this.input3='*'+this.input3
           this.str3="*molecular_weight"
        };
        if(this.input4!==''){
          this.input4='*'+this.input4
           this.str4="*molecular_formula"
        }; 
        if(this.input5!==''){
          this.input5='*'+this.input5
           this.str5="*logP"
        };
        if(this.input6!==''){
          this.input5='*'+this.input6
           this.str6="*toxicity_data"
        };  
        // this.fzy='?'+this.input1+this.input2+this.input3+this.input4+this.input5;
        this.fzy="pk1="+this.str1+this.str2+this.str3+this.str4+this.str5+this.str6+"&pk2="+this.input1+this.input2+this.input3+this.input4+this.input5+this.input6;
        console.log(this.fzy)
        this.$router.push({path:'/cir',query:{id:this.fzy}})
        },
      cleardata(){
        this.input1=''
        this.input2=''
        this.input3=''
        this.input4=''
        this.input5=''
        this.input6=''
      }             
    }
  }
</script>
<style scoped lang="scss">
.width85{
    width:85%;
    margin: 0 auto;
    //化学物质索引数据库
    h3{
        color: #163DB2;
        margin-bottom:15px;
        margin-top :15px;
        text-align: center
    }
    h4{
        text-align: center;
        margin-bottom:15px;
    }
    .content{
        border:1px solid #AABCCF;
        padding:10px;
        
        .searchtext{
            background-color: #EEF7FE;
            margin-bottom:15px;
            height: 35px;
            line-height: 35px;
        }
        .searchtext2{
            background-color: #EEF7FE;
            margin-top :15px;
            height: 35px;
            line-height: 35px;
        }        
        .name{
            display:inline-block;
            width:500px;
            margin-bottom:15px;
            margin-top :15px;
        }
        .el-input{
            width:500px;
        }
        .text{
            white-space: pre-wrap;
            margin-top:10px;
            margin-left:8px;
        }

        .riqi{
             width:150px;
             display:inline-block;
         }
    }
    //美国FDA药品橙皮书数据库/化学物质索引数据库
}
</style>