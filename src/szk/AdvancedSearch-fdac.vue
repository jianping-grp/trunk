<template>
  <div>
    <div class="service">
<!-- <ChildBanner></ChildBanner>-->
<Header></Header>
        <div class="width85">
            <!-- 美国FDA药品橙皮书数据库 -->
            <h3>美国FDA药品橙皮书数据库</h3>
            <h4>U.S. FDA Orange Book: Approved Drug Products with Therapeutic Equivalence Evaluations</h4>
            <div class="content">
                <div class="searchtext"> <i class="el-icon-search"></i><b>简单搜索--请输入需要查询的英文药品商品名，活性成分，申请号</b></div>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
                <el-button v-on:click="getData" type="primary">查询</el-button><el-button v-on:click="clearData" type="info">清除</el-button>
                *Search by Trade Name,Active Ingredient,Application Number.
                <div class="searchtext2"> <i class="el-icon-search"></i><b>高级搜索</b></div>
                <div class="row"><div class="name">药品通用名或有效成分Drug Generic Name / Active Ingredient</div><el-input v-model="input1" placeholder="请输入内容"></el-input></div>
                <div><div class="name">药品商品名或专利药名Drug Brand Name / Proprietary Name</div><el-input v-model="input2" placeholder="请输入内容"></el-input></div>
                <div><div class="name">产品号Product Number</div><el-input v-model="input3" placeholder="请输入内容"></el-input></div>
                <div><div class="name">药品规格或剂量Strength</div><el-input v-model="input4" placeholder="请输入内容"></el-input></div>
                <div><div class="name">药品的市场状态Product Marketing Status</div><el-radio-group v-model="radio">
                                                    <el-radio :label="'RX'">处方药</el-radio>
                                                    <el-radio :label="'OTC'">非处方药</el-radio>
                                                    <el-radio :label="'DISCN'">停止上市</el-radio>
                                                    <el-radio :label="'bu'">不限</el-radio>                                                    
                                                </el-radio-group></div>
                <div><div class="name">是否作为生物等效试验对照药物Reference Standard (RS)</div><el-radio-group v-model="radio2">
                                                    <el-radio :label="'Yes'">是</el-radio>
                                                    <el-radio :label="'No'">否</el-radio>
                                                    <el-radio :label="'bu'">不限</el-radio>
                                                </el-radio-group></div>
                <div><div class="name">药品申请类型Application Type</div><el-radio-group v-model="radio3">
                                                    <el-radio :label="'NDA'">NDA（新药）</el-radio>
                                                    <el-radio :label="'ANDA'">ANDA（仿制药）</el-radio>
                                                    <el-radio :label="'bu'">全部</el-radio>
                                                </el-radio-group></div>                                                                                                                                                                               
                <div class="name"></div><el-button v-on:click="getdata" type="primary">查询</el-button><el-button type="info" v-on:click="cleardata">清除</el-button>
                <div class="searchtext2"> <i class="el-icon-search"></i><b>数据库说明</b></div>
                <div class="text">本数据与美国FDA官方药品橙皮书数据库同步，在官方数据基础上，提供更全面的检索方式和更简洁高效、完整的数据展现，并且可以回溯专利及市场独占权（市场排他数据）历史信息。</div>
            </div>            
            <!-- 美国FDA药品橙皮书数据库 -->   
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
          str1:'active_ingredient',
          str2:'',
          str3:'',
          str4:'',
          str5:'',
          str6:'',
          str7:'',
          input:'',
          input1:'',
          input2:'',
          input3:'',
          input4:'',
          input5:'',
          checkList: ['选中且禁用','复选框 A'],
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
        radio:'bu',
        radio2:'bu',
        radio3:'bu'
      }
    },
    mounted() {
                
    },
        methods:{
      getdata(){
        // if(this.input1!==''){
        //    this.input1="active_ingredient="+this.input1+"&"
        // };
        // if(this.input2!==''){
        //    this.input2="trade_name="+this.input2+"&"
        // };        
        // if(this.input3!==''){
        //    this.input3="product_number_approval_date="+this.input3+"&"
        // };
        // if(this.input4!==''){
        //    this.input4="specification_or_dosage="+this.input4+"&"
        // };
        // if(this.radio!=='bu'){
        //    this.radio="market_state="+this.radio+"&"
        // }else{
        //   this.radio=''
        // };   
        // if(this.radio2!=='bu'){
        //    this.radio2="bioequivalence_reference_standard_or_not="+this.radio2+"&"
        // }else{
        //   this.radio2=''
        // }; 
        // if(this.radio3!=='bu'){
        //    this.radio3="application_type="+this.radio3
        // }else{
        //   this.radio3=''
        // };     
        if(this.input1!==''){
           this.input1=this.input1
          //  this.str1="*active_ingredient"
        };
        if(this.input2!==''){
          this.input2='*'+this.input2
           this.str2="*trade_name"
        };        
        if(this.input3!==''){
          this.input3='*'+this.input3
           this.str3="*product_id"
        };
        if(this.input4!==''){
          this.input4='*'+this.input4
           this.str4="*specification_or_dosage"
        };
        if(this.radio!=='bu'){
          this.radio='*'+this.radio
           this.str5="*market_state"
        }else{
          this.radio=''
        };   
        if(this.radio2!=='bu'){
          this.radio2='*'+this.radio2
           this.str6="*bioequivalence_reference_standard_or_not"
        }else{
          this.radio2=''
        }; 
        if(this.radio3!=='bu'){
          this.radio3='*'+this.radio3
           this.str7="*application_type"
        }else{
          this.radio3=''
        };  
                // this.fzy=this.input1+this.input2+this.input3+this.input4+this.radio+this.radio2+this.radio3;      
        this.fzy="pk1="+this.str1+this.str2+this.str3+this.str4+this.str5+this.str6+this.str7+"&pk2="+this.input1+this.input2+this.input3+this.input4+this.radio+this.radio2+this.radio3;
        console.log(this.fzy)
        this.$router.push({path:'/fdacr',query:{id:this.fzy,id2:2}})
        },
        getData(){            
        this.$router.push({ path:'/fdacr',query:{id:this.input,id2:1}})
      }, 
      clearData(){
        this.input=''
      },
      cleardata(){
        this.input1=''
        this.input2=''
        this.input3=''
        this.input4=''
        this.radio='bu',
        this.radio2='bu',
        this.radio3='bu'
      }        
    }
  }
</script>
<style scoped lang="scss">
.width85{
    width:85%;
    margin: 0 auto;
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
}
</style>