<template>
  <div>
    <div class="Fdaresult">
      <ChildBanner></ChildBanner>
      <!-- 分子搜索页面 -->
      <div class='width70'>
        <div class='back'>
        <el-button  v-on:click="back" type="primary">返回搜索界面</el-button></div>        
		  <!-- <div class="childTip">中国药品注册数据库(Chinese Marketed Drugs Database)</div>
			<div class="tableBox" >
			国产药品数据区
       <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="批准文号"
        width="130">
      </el-table-column>
            <el-table-column
        prop="date"
        label="药品本位码"
        width="130">
      </el-table-column>
            <el-table-column
        prop="date"
        label="产品名称"
        width="130">
      </el-table-column>
            <el-table-column
        prop="date"
        label="英文名称"
        width="130">
      </el-table-column>
            <el-table-column
        prop="date"
        label="生产厂家"
        width="130">
      </el-table-column>
            <el-table-column
        prop="date"
        label="生产地址"
        width="130">
      </el-table-column>
            <el-table-column
        prop="date"
        label="剂型"
        width="130">
      </el-table-column>
      <el-table-column
        prop="name"
        label="规格"
        width="130">
      </el-table-column>
      <el-table-column
        prop="address"
        label="类别">
      </el-table-column>
            <el-table-column
        prop="address"
        label="批准日期">
      </el-table-column>
    </el-table>
    </div>

    <div class="tableBox" >
			注销或撤销批准文号国产药品
       <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="批准文号"
        width="130">
      </el-table-column>
            <el-table-column
        prop="date"
        label="药品本位码"
        width="130">
      </el-table-column>
            <el-table-column
        prop="date"
        label="产品名称"
        width="130">
      </el-table-column>
            <el-table-column
        prop="date"
        label="英文名称"
        width="130">
      </el-table-column>
            <el-table-column
        prop="date"
        label="生产厂家"
        width="130">
      </el-table-column>
            <el-table-column
        prop="date"
        label="生产地址"
        width="130">
      </el-table-column>
            <el-table-column
        prop="date"
        label="剂型"
        width="130">
      </el-table-column>
      <el-table-column
        prop="name"
        label="规格"
        width="130">
      </el-table-column>
      <el-table-column
        prop="address"
        label="类别">
      </el-table-column>
            <el-table-column
        prop="address"
        label="批准日期">
      </el-table-column>
    </el-table>
    </div> -->
 <!--  仿制药参比制剂目录   -->   
    		  <div class="childTip">仿制药参比制剂目录(Reference Listed Drug for Generic Drugs)</div>
			<div class="tableBox" >
       <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="serial_number"
        label="序号"
        width="200">
      </el-table-column>
            <el-table-column
        prop="generic_name"
        label="药品通用名称"
        width="200">
      </el-table-column>
            <el-table-column
        prop="english_name_or_trade"
        label="英文名称/商品名"
        width="200">
      </el-table-column>
            <el-table-column
        prop="specifications"
        label="规格"
        width="200">
      </el-table-column>
            <el-table-column
        prop="dosage_form"
        label="剂型"
        width="200">
      </el-table-column>
            <el-table-column
        prop="remarks1"
        label="备注1"
        width="200">
      </el-table-column>
      <el-table-column
        prop="remarks2"
        label="备注2"
        width="200">
      </el-table-column>
      <el-table-column
        prop="information_sources"
        label="信息来源">
      </el-table-column>
    </el-table>
    </div>
 <!--  仿制药参比制剂目录   -->   
           <el-pagination
          background
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
  </div> 
  </div>
</template>

<script>
 import ChildBanner from '@/components/ChildBanner'
   import global from '@/common/global'
  export default {
    name: "zgzcresult",
    components:{
      ChildBanner
    },
    data() {
      return {
        token:global.token,
              param:'',
              id:'',
         fzy:'',
        tableData:[],
        total:{}
      }
    },
    mounted() {
            this.fzy=this.$route.query.id,
            this.id=this.$route.query.id2;
            if(this.id===1){
            this.getdata2(1,this.fzy)
            }else{
            this.getdata(1,this.fzy)
            }

    },

    methods:{
            back(){
        this.$router.go(-1)
      },
    getdata(val,sea){
        this.$axios.get(`http://${this.token}/GenericDrugData/?${sea}&page=${val}`,{
        }).then(res=>{this.tableData=res.data.results;this.total=res.data.count;
          console.log(res);
          console.log(this.tableData)})
    },
        getdata2(val,sea){
                        this.$axios.get(`http://${this.token}/GenericDrugData/?pk=${sea}&page=${val}`,{
        }).then(res=>{this.tableData=res.data.results;this.total=res.data.count;
          console.log(res);
          console.log(this.tableData)})
    },
            handleCurrentChange(val) {
          console.log(`当前页: ${val}`)
          this.getdata(val,this.fzy);
      }
    }

  }
</script>

<style scoped lang="scss">
 .width70{
    width: 85%;
    margin: 0 auto;
  }
    .childTip{
    color:#101010;
    font-size:14px;
    margin-top:50px;
  }
    .tableBox{
    margin-top:20px;
  }
    .back{
    margin-top: 20px;
  }
</style>