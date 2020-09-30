<template>
  <div>
    <div class="service">
    <!-- <ChildBanner></ChildBanner>-->
    <Header></Header>
        <div class="width85">
            <!-- 美国FDA药品专利数据库 -->
            <h3>美国FDA药品专利数据库</h3>
            <h4>U.S. FDA Drugs Patent Database</h4>
            <div class="content">
                <div class="searchtext"> <i class="el-icon-search"></i><b>高级搜索</b></div>
                <div class="row"><div class="name">药品商品名Drug Brand Name</div><el-input v-model="input2" placeholder="请输入内容"></el-input></div>
                <div><div class="name">药品活性成分Active Ingredient</div><el-input v-model="input1" placeholder="请输入内容"></el-input></div>
                <div><div class="name">剂型(Dosage Form):</div><el-input v-model="input3" placeholder="请输入内容"></el-input>
                <div class="name"></div><el-button v-on:click="getdata" type="primary">查询</el-button><el-button v-on:click="cleardata"  type="info">清除</el-button>
                </div>
                <div class="row"><div class="name">以专利号为关键字(U.S. Patent Number):</div><el-input v-model="input" placeholder="请输入内容">&nbsp;</el-input></div>
                <!-- <div><div class="name">以专利到期为关键字(U.S. Patent Expire Date):</div><el-date-picker
                                                                v-model="value1"
                                                                type="date"
                                                                placeholder="选择日期"
                                                                class='riqi'>
                                                                </el-date-picker> &nbsp;&nbsp;-- &nbsp;&nbsp;<el-date-picker
                                                                v-model="value1"
                                                                type="date"
                                                                placeholder="选择日期"
                                                                class='riqi'>
                                                                </el-date-picker></div> -->
                <div><div class="name">限定范围: </div><el-checkbox-group class='checkbox' v-model="checkList">
                                                            <el-checkbox class='riqi' label="a">物质专利</el-checkbox>
                                                            <el-checkbox class='riqi' label="b">产品专利</el-checkbox>
                                                            <el-checkbox class='riqi' label="c">用途专利</el-checkbox>
                                                        </el-checkbox-group></div>

                <div class="name"></div><el-button v-on:click="getData" type="primary">查询</el-button><el-button v-on:click="clearData" type="info">清除</el-button>
                <div class="searchtext2"> <i class="el-icon-search"></i><b>数据库说明</b></div>
                <div class="text">1、以专利号为关键字则专利号码不加US及类别代码。
2、检索条件支持模糊查询，各输入条件间的检索关系为逻辑与（即AND关系）
说明：本数据库收录了美国FDA认可并公布的所有有效药品专利。
通常情况下，通用名药物（Generic drugs），也称仿制药，必须在专利药物保护过期后才能上市销售。药品专利的查询对仿制药物研发和市场有非常重要的意义。
本数据库结合药物在线推出的美国FDA药品数据库进行检索，可对任一药品的美国上市信息（包括注册审批信息等）有全面了解。
当前数据库最后更新时间:2019年11月14日。</div>
            </div>
            <!-- 美国FDA药品专利数据库 -->    
       </div>
    </div>
  </div>
</template>

<script>
  //  import ChildBanner from '@/components/ChildBanner'
   import Header from '@/components/Header'
  export default {
    name: "AdvancedSearch",
    components:{
      // ChildBanner
      Header
    },
    data() {
      return {
          tableData:[],
          total:{},
          fzy:'',
          str1:'trade_name',
          str2:'',
          str3:'',
          str4:'patent_number',
          str5:'',
          input:'',
          input1:'',
          input2:'',
          input3:'',
          input4:'',
          input5:'',
          checkList: [],
             options: [{
          value: '选项1',
          label: 'ALL'
        }, {
          value: '选项2',
          label: 'Prescription'
        }, {
          value: '选项3',
          label: 'Qver-the-counter'
        }, {
          value: '选项4',
          label: 'None'
        }],
        value: 'ALL',
        radio:'1',
        radio2:'2'

      }
    },
    mounted() {
   
             
    },
      methods:{
      getdata(){
        // if(this.input1!==''){
        //    this.input1="trade_name="+this.input1.toUpperCase()+"&"
        // };
        // if(this.input2!==''){
        //    this.input2="active_ingredient="+this.input2.toUpperCase()+"&"
        // };        
        // if(this.input3!==''){
        //    this.input3="dosage_form="+this.input3.toUpperCase()
        // };
        if(this.input2!==''){
          this.input2='*'+this.input2
           this.str2="*active_ingredient"
        };        
        if(this.input3!==''){
          this.input3='*'+this.input3
           this.str3="*dosage_form"
        }; 
        // this.fzy=this.input1+this.input2+this.input3;
        this.fzy="pk1="+this.str1+this.str2+this.str3+"&pk2="+this.input1+this.input2+this.input3;
        console.log(this.fzy)
        this.$router.push({path:'/fdapr',query:{id:this.fzy,id2:2}})
        },
        getData(){
        // if(this.input!==''){
        //   this.input="patent_number="+this.input+"&"
        //   this.str4="patent_number"
        // }
        if(this.checkList.indexOf('a')>-1){
           this.input1='*Y'
           this.str1="*material_patent"
        };
        if(this.checkList.indexOf('b')>-1){
           this.input2='*Y'
           this.str2="*product_patent"
        };        
        if(this.checkList.indexOf('c')>-1){
           this.input3='*U'
           this.str3="*use_patent"          
          //  this.input3="use_patent=U"+this.input3+"&"
        };
        this.fzy="pk1="+this.str4+this.str1+this.str2+this.str3+"&pk2="+this.input+this.input1+this.input2+this.input3;          
        this.$router.push({path:'/fdapr',query:{id:this.fzy,id2:1}})
        },
        clearData(){
        this.input=''
        },
        cleardata(){
        this.input1=''
        this.input2=''
        this.input3=''
        this.input4=''
     }          
    }
  }
</script>

<style scoped lang="scss">
.width85{
    width:85%;
    margin: 0 auto;
    //美国FDA药品专利数据库
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
            width:600px;
            margin-bottom:15px;
            margin-top :15px;
        }
        .el-input{
            width:500px;
        }
        .riqi{
            width:150px;
            display:inline-block;
        }
        .checkbox{
            display:inline-block;
        }
        .text{
            white-space: pre-wrap;
            margin-top:10px;
            margin-left:8px;
        }        
        
    }
    //美国FDA药品专利数据库  
}
</style> 