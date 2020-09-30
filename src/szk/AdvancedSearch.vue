<template>
  <div>
    <div class="service">
     <Header></Header>
        <div class="width85">
            <!-- 仿制药参比制剂目录 -->
            <h3>仿制药参比制剂目录</h3>
            <h4>Reference Listed Drug for Generic Drugs</h4>
            <div class="content">
                <div class="searchtext"> <i class="el-icon-search"></i><b>智能搜索--请输入需要查询的中文或英文药品通用名，英文商品名</b></div>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
                <el-button v-on:click="getData" type="primary">查询</el-button><el-button v-on:click="clearData"  type="info">清除</el-button>
                *Search by Drug Generic Name / Trade Name.
                <div class="searchtext2"> <i class="el-icon-search"></i><b>高级搜索</b></div>
                <div class="row"><div class="name">中文药品通用名 Drug Generic Name</div><el-input v-model="input1" placeholder="请输入内容"></el-input></div>
                <div><div class="name">英文药品通用名/商品名 Generic Name in English / Trade Name</div><el-input v-model="input2" placeholder="请输入内容"></el-input></div>
                <div><div class="name">剂型 Dosage Form</div><el-input v-model="input3" placeholder="请输入内容"></el-input></div>
                <div><div class="name">规格 Strength</div><el-input v-model="input4" placeholder="请输入内容"></el-input></div>
                <!-- <div><div class="name">持证商Holder</div><el-input v-model="input5" placeholder="请输入内容"></el-input></div>  -->
                <div class="name"></div><el-button v-on:click="getdata" type="primary">查询</el-button><el-button v-on:click="cleardata" type="info">清除</el-button>
                <div class="searchtext2"> <i class="el-icon-search"></i><b>数据库说明</b></div>
                <div class="text">仿制药参比制剂是国内进行仿制药注册申请及仿制药一致性评价的基础，本数据库汇总了来自官方公布的数据，提供快捷检索并可追溯数据来源。</div>
            </div>            
            <!-- 仿制药参比制剂目录 -->

            <!-- 中国药品注册数据库 -->
            <!-- <h3>中国药品注册数据库</h3>
            <h4>Chinese Marketed Drugs Database</h4>
            <div class="content">
                <div class="searchtext"> <i class="el-icon-search"></i><b>智能搜索--以中文或英文药品名称,通用名,商品名为关键字，同时检索国产药品与进口药品(包括已注销或撤销药品)数据库.</b></div>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
                <el-button type="primary">查询</el-button><el-button type="info">清除</el-button>
                *Search by Generic name,Trade name,Product name with Chinese or English. 
                <div class="searchtext2"> <i class="el-icon-search"></i><b>高级搜索</b></div>
                <el-tabs v-model="activeName" @tab-click="handleClick">
                    <el-tab-pane label="国产药品注册 " name="first">                
                        <div class="row"><div class="name">药品批准文号</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
                        <div><div class="name">药品本位码</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
                        <div><div class="name">产品名称</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
                        <div><div class="name">商品名</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
                        <div><div class="name">生产单位</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
                        <div><div class="name">规格 Strength</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
                        <div><div class="name">批准日期</div><el-date-picker
                                                                v-model="value1"
                                                                type="date"
                                                                placeholder="选择日期"
                                                                class='riqi'>
                                                                </el-date-picker> &nbsp;&nbsp;-- &nbsp;&nbsp;<el-date-picker
                                                                v-model="value1"
                                                                type="date"
                                                                placeholder="选择日期"
                                                                class='riqi'>
                                                                </el-date-picker></div>
                    </el-tab-pane>
                    <el-tab-pane label="进口药品注册 " name="second">
                        <div class="row"><div class="name">注册证号</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
                        <div><div class="name">产品名称（中文）</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
                        <div><div class="name">商品名（中文）</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
                        <div><div class="name">生产厂商（中文）</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
                        <div><div class="name">厂商国家（中文）</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
                        <div><div class="name">发证日期</div><el-date-picker
                                                                v-model="value1"
                                                                type="date"
                                                                placeholder="选择日期"
                                                                class='riqi'>
                                                                </el-date-picker> &nbsp;&nbsp;-- &nbsp;&nbsp;<el-date-picker
                                                                v-model="value1"
                                                                type="date"
                                                                placeholder="选择日期"
                                                                class='riqi'>
                                                                </el-date-picker></div>
                        <div><div class="name">公司名称（中文）</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
                        <div><div class="name">申请人国家（中文）</div><el-input v-model="input" placeholder="请输入内容"></el-input></div>
                    </el-tab-pane>
                </el-tabs>   
                <div class="name"></div><el-button type="primary">查询</el-button><el-button type="info">清除</el-button>
                <div class="searchtext2"> <i class="el-icon-search"></i><b>数据库说明</b></div>
                <div class="text">1、本数据库涵盖了至目前为止所有在国内批准注册上市的药品，可查询国家食品药品监督管理局（State Food and Drug Administration）批准的所有国产药品和进口药品数据，包括已注销或撤销的国产药品与进口药品。
2、检索条件支持模糊查询和组合查询,各条件间关系为逻辑与。例如在智能搜索栏中输入头孢呋辛酯片或Cefuroxime Axetil Tablets，即可查询所有在国内上市的头孢呋辛酯片注册情况。 
3、检索结果包括：
◆国产药品注册数据库包括批准文号、原批准文号、药品本位码、本位码注释、产品名称、英文名称、商品名、生产厂家、生产地址、规格、剂型、类别、批准日期等。
◆进口药品注册数据库包括注册证号、原注册证号、产品名称（中文）、产品名称（英文）、商品名（中文）、商品名（英文）、剂型（中文）、规格（中文） 、注册证号备注、包装规格（中文）、生产厂商（中文）、生产厂商（英文）、厂商地址（中文）、厂商地址（英文）、厂商国家（中文） 厂商国家（英文）、分包装批准文号、发证日期、有效期截止日、分包装企业名称、分包装企业地址、分包装文号批准日期、分包装文号有效期截止日、产品类别、药品本位码、药品本位码备注等。
4、当前数据库最后更新时间:2016年3月28日。
本数据库包含国内到目前为止已上市的全部药品，将帮助您快速获知某药品及相关药品在国内注册、审批等方面的重要信息。</div>
            </div>             -->
            <!-- 中国药品注册数据库 --> 
 
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
          str1:'generic_name',
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
        radio:'1',
        radio2:'2'

      }
    },
    mounted() {
   
             
    },
        methods:{
      getdata(){
        //           if(this.input1!==''){
        //    this.input1="generic_name="+this.input1+"&"
        // };
        // if(this.input2!==''){
        //    this.input2="english_name_or_trade="+this.input2+"&"
        // };        
        // if(this.input3!==''){
        //    this.input3="dosage_form="+this.input3+"&"
        // };
        // if(this.input4!==''){
        //    this.input4="specifications="+this.input4+"&"
        // };
        if(this.input1!==''){
           this.input1=this.input1
          //  this.str1="*active_ingredient"
        };
        if(this.input2!==''){
          this.input2='*'+this.input2
           this.str2="*english_name_or_trade"
        };        
        if(this.input3!==''){
          this.input3='*'+this.input3
           this.str3="*dosage_form"
        };
        if(this.input4!==''){
          this.input4='*'+this.input4
           this.str4="*specifications"
        }; 
        // this.fzy='?'+this.input1+this.input2+this.input3+this.input4;
        this.fzy="pk1="+this.str1+this.str2+this.str3+this.str4+"&pk2="+this.input1+this.input2+this.input3+this.input4;
        console.log(this.fzy)
     this.$router.push({path:'/fzyr',query:{id:this.fzy,id2:2}})
        },
      getData(){            
        this.$router.push({path:'/fzyr',query:{id:this.input,id2:1}})
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
    //方笔目录制剂
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
    }
    //方笔目录制剂
            //中国药品注册数据库
    // h3{
    //     color: #163DB2;
    //     margin-bottom:15px;
    //     margin-top :15px;
    //     text-align: center
    // }
    // h4{
    //     text-align: center;
    //     margin-bottom:15px;
    // }
    // .content{
    //     border:1px solid #AABCCF;
    //     padding:10px;
        
    //     .searchtext{
    //         background-color: #EEF7FE;
    //         margin-bottom:15px;
    //         height: 35px;
    //         line-height: 35px;
    //     }
    //     .searchtext2{
    //         background-color: #EEF7FE;
    //         margin-top :15px;
    //         height: 35px;
    //         line-height: 35px;
    //     }        
    //     .name{
    //         display:inline-block;
    //         width:500px;
    //         margin-bottom:15px;
    //         margin-top :15px;
    //     }
    //     .el-input{
    //         width:500px;
    //     }
    //     .riqi{
    //         width:150px;
    //         display:inline-block;
    //     }
    //     .text{
    //         white-space: pre-wrap;
    //         margin-left:10px;
    //     }        
        
    // }
    //中国药品注册数据库

}
</style>