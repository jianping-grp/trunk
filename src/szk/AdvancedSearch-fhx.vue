<template>
  <div>
    <div class="service">
     <!-- <ChildBanner></ChildBanner>-->
     <Header></Header>
        <div class="width85">
            <h3>美国FDA批准药物非活性成分数据库</h3>
            <h4>Inactive Ingredient Search for Approved Drug Products</h4>
            <div class="content">
                <div class="searchtext"> <i class="el-icon-search"></i><b>高级搜索</b></div>
                <div class="row"><div class="name">非活性成分名称(Inactive Ingredient):</div><el-input v-model="input1" placeholder="请输入内容"></el-input> 例如:lactose、mannitol等.</div>
                <div><div class="name">给药途径(Route):</div><el-input v-model="input2" placeholder="请输入内容"></el-input> 例如:Oral、TOPICAL等.</div>
                <div><div class="name">剂型(Dosage Form):</div><el-input v-model="input3" placeholder="请输入内容"></el-input> 例如Tablet、Capsule、Solution等.</div>
                <div><div class="name">CAS登记号(CAS Number):</div><el-input v-model="input4" placeholder="请输入内容"></el-input> 注:美国化学文摘登记号.</div>
                <div><div class="name">唯一标识码(Unique Ingredient Identifier):</div><el-input v-model="input5" placeholder="请输入内容"></el-input> 注:美国药典登记系统唯一标识码.</div> 
                <div class="name"></div><el-button  v-on:click="getdata" type="primary">查询</el-button><el-button v-on:click="cleardata" type="info">清除</el-button>
                <div class="searchtext2"> <i class="el-icon-search"></i><b>数据库说明</b></div>
                <div class="text">1、本数据库为FDA批准药物所使用的非活性成分数据库，即FDA上市产品中包含的辅料信息数据。
2、检索条件支持模糊查询，各输入条件间的检索关系为逻辑与（即AND关系）。
3、检索结果包括：非活性成分名称、给药途径、剂型、CAS登记号、美国药典/FDA物质登记系统唯一标识码、处方中辅料使用量。
4、利用本数据库可以为药物研究开发者提供辅料的安全用量的事实性数据。
5、数据更新与FDA同步，当前数据量:12384条，最后更新日期：2019年4月。
重要更新：药用辅料手册在线版已经开通，可直接查询药用辅料的性质、特点、途径及使用方法等。</div>
            </div>
            <!-- 美国FDA批准药物非活性成分数据库 -->
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
          str1:'inactive_ingredient',
          str2:'',
          str3:'',
          str4:'',
          str5:'',
          input:'',
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
           this.str2="*route"
        };        
        if(this.input3!==''){
          this.input3='*'+this.input3
           this.str3="*dosage_form"
        };
        if(this.input4!==''){
          this.input4='*'+this.input4
           this.str4="*cas_numbers"
        }; 
        if(this.input5!==''){
          this.input5='*'+this.input5
           this.str5="*sUNII"
        };  
        // this.fzy='?'+this.input1+this.input2+this.input3+this.input4+this.input5;
        this.fzy="pk1="+this.str1+this.str2+this.str3+this.str4+this.str5+"&pk2="+this.input1+this.input2+this.input3+this.input4+this.input5;
        console.log(this.fzy)
        this.$router.push({path:'/fhxr',query:{id:this.fzy}})
        },
      getdata1(page,sea,phase){this.$axios.get(`http://192.168.1.138:9003/InactiveIngredientSearch/?${this.fzy}`,{
        }).then(res=>{this.tableData=res.data.results;this.total=res.data.meta;
          console.log(res);
          console.log(this.tableData)})},
      cleardata(){
        this.input1=''
        this.input2=''
        this.input3=''
        this.input4=''
        this.input5=''
      }             
    }
  }
</script>
<style scoped lang="scss">
.width85{
    width:85%;
    margin: 0 auto;
    //美国FDA批准药物非活性成分数据库
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
            // margin-bottom:15px;
            height: 35px;
            line-height: 35px;
        }
        .searchtext2{
            background-color: #EEF7FE;
            margin-top :15px;
            margin-bottom:15px;
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
            margin-left:10px;
        }
    }
        //美国FDA批准药物非活性成分数据库
}
</style>
