<template>
  <div>
    <div class="service">
       <Header></Header>
        <div class="width85">
             <!-- 美国FDA药品数据库 -->
            <h3>美国FDA药品数据库</h3>
            <h4>U.S. FDA Drugs Database</h4>
            <div class="content">
                <div class="searchtext"> <i class="el-icon-search"></i><b>简单搜索--查询药品名称,活性成分,申请号</b></div>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
                <el-button v-on:click="getData" type="primary">查询</el-button><el-button v-on:click="clearData" type="info">清除</el-button>
                *Search by Drug Name,Active ingredient,Application Number.
                <div class="searchtext2"> <i class="el-icon-search"></i><b>高级搜索</b></div>
                <div class="row"><div class="name">药品通用名或有效成分Drug Generic Name / Active Ingredient</div><el-input v-model="input1" placeholder="请输入内容"></el-input></div>
                <div><div class="name">药品商品名或专利药名Drug Brand Name / Proprietary Name</div><el-input v-model="input2" placeholder="请输入内容"></el-input></div>
                <div><div class="name">产品号Product Number</div><el-input v-model="input3" placeholder="请输入内容"></el-input></div>
                <div><div class="name">药品规格或剂量Strength</div><el-input v-model="input4" placeholder="请输入内容"></el-input></div>
                <div><div class="name">药品的市场状态Product Marketing Status</div><el-select v-model="value" placeholder="请选择">
                                                                                        <el-option
                                                                                        v-for="item in options"
                                                                                        :key="item.value"
                                                                                        :label="item.label"
                                                                                        :value="item.value">
                                                                                        </el-option>
                                                                                  </el-select></div>
                <div><div class="name">是否作为生物等效试验对照药物Reference Standard (RS)</div><el-radio-group v-model="radio">
                                                    <el-radio :label="'Yes'">是</el-radio>
                                                    <el-radio :label="'No'">否</el-radio>
                                                    <el-radio :label="'bu'">不限</el-radio>
                                                </el-radio-group></div>
                <!-- <div><div class="name">药品申请类型Application Type</div><el-radio-group v-model="radio2">
                                                    <el-radio :label="'NDA  '">NDA（新药）</el-radio>
                                                    <el-radio :label="'ANDA'">ANDA（仿制药）</el-radio>
                                                    <el-radio :label="'BLA'">BLA（生物药）</el-radio>
                                                    <el-radio :label="'bu'">全部</el-radio>
                                                </el-radio-group></div>                                                   -->
                <!-- <div><div class="name">产品号批准日期Product Number Approval Date</div><el-date-picker
                                                                v-model="value1"
                                                                type="date"
                                                                placeholder="选择日期"
                                                                class='riqi'>
                                                                </el-date-picker> &nbsp;&nbsp;-- &nbsp;&nbsp;<el-date-picker
                                                                v-model="value1"
                                                                type="date"
                                                                placeholder="选择日期"
                                                                class='riqi'>
                                                                </el-date-picker></div>                                    -->
                <div class="name"></div><el-button  v-on:click="getdata" type="primary">查询</el-button><el-button v-on:click="cleardata" type="info">清除</el-button>
                <div class="searchtext2"> <i class="el-icon-search"></i><b>数据库说明</b></div>
                <div class="text">1、本数据库涵盖了至目前为止所有经美国食品药品管理局（U.S. Food and Drug Administration）批准在美国上市或曾经上市的全部药品，可查询FDA批准的药品审批注册信息及相关文件、专利数据、市场保护等。
2、检索条件支持模糊查询和组合查询,各条件间关系为逻辑与。例如在药品通用名或有效成分栏中输入Levofloxacin，即可查询所有在美国上市的左氧氟沙星品种。 
3、检索结果包括：
◆商品名、有效成分、通用名、剂型与给药途径、规格或剂量、申请号、产品号、是否参比药品、是否生物等效试验对照药品，市场状态、治疗等效代码、原始申请及各规格产品批准日期、申请人或申请机构等信息。
本数据库包含FDA批准的到目前为止已上市或曾经上市的全部药品，将帮助您快速获知某药品及相关药品在美国注册、审批、专利等方面的重要信息。
4、本数据库每周更新。当前数据库最后更新时间:2019年12月10日。</div>               
            </div>            
            <!-- 美国FDA药品数据库 -->
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
          value: 'ALL',
          label: 'ALL'
        }, {
          value: 'Prescription',
          label: 'Prescription'
        }, {
          value: 'Qver-the-counter',
          label: 'Qver-the-counter'
        }, {
          value: 'None(Tentative Approval)',
          label: 'None(Tentative Approval)'
        }, {
          value: 'Discontinued',
          label: 'Discontinued'
        }],
        value: 'ALL',
        radio:"bu",
        radio2:"bu"

      }
    },
    mounted() {
   
             
    },
        methods:{
    //   tabClick(tabLable){
    //     this.getdata(1,this.searchinput,this.tabPosition);
    //     console.log(tabLable);
    //     console.log(this.tabPosition)
    //   },
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
        // if(this.value!=='ALL'){
        //    this.value="market_state="+this.value+"&"
        // }else{
        //   this.value=''
        // };   
        // if(this.radio!=='bu'){
        //    this.radio="RS="+this.radio
        // }else{
        //   this.radio=''
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
           this.str5="*RS"
        }else{
          this.radio=''
        };   
        if(this.value!=='ALL'){
          this.value='*'+this.value
           this.str6="*market_state"
        }else{
          this.value=''
        };        
        // this.fzy=this.input1+this.input2+this.input3+this.input4+this.value+this.radio;
        this.fzy="pk1="+this.str1+this.str2+this.str3+this.str4+this.str5+this.str6+"&pk2="+this.input1+this.input2+this.input3+this.input4+this.radio+this.value;
        console.log(this.fzy)
        this.$router.push({path:'/fdar',query:{id:this.fzy,id2:2}})
        },
        getData(){            
        this.$router.push({ path:'/fdar',query:{id:this.input,id2:1}})
      }, 
            clearData(){
        this.input=''
      },
      cleardata(){
        this.input1=''
        this.input2=''
        this.input3=''
        this.input4=''
        this.radio='bu'
        this.value='ALL'
      }   
    }
  }
</script>
<style scoped lang="scss">
.width85{
    width:85%;
    margin: 0 auto;
        //美国FDA药品数据库
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
    //美国FDA药品数据库
}
</style>