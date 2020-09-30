<template>
  <div>
    <div class="Fdaresult">
      <!-- <el-button  v-on:click="back" type="primary">返回搜索界面</el-button> -->
      <ChildBanner></ChildBanner>
      <!-- <Header></Header> -->
      <!-- 分子搜索页面 -->
      <div class='width70'>
        <div class='back'>
        <el-button  v-on:click="back" type="primary">返回搜索界面</el-button></div>
		  <!-- <div class="childTip">美国FDA药品专利数据库(U.S. FDA Drugs Patent Database)</div>
			<div class="tableBox" >
			
       <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="date"
        label="专利号"
        width="150">
      </el-table-column>
            <el-table-column
        prop="date"
        label="专利到期日"
        width="150">
      </el-table-column>
            <el-table-column
        prop="date"
        label="申请号"
        width="150">
      </el-table-column>
            <el-table-column
        prop="date"
        label="产品号"
        width="150">
      </el-table-column>
            <el-table-column
        prop="date"
        label="商品名"
        width="150">
      </el-table-column>
            <el-table-column
        prop="date"
        label="活性成分"
        width="150">
      </el-table-column>
            <el-table-column
        prop="date"
        label="剂型"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="物质专利"
        width="150">
      </el-table-column>
      <el-table-column
        prop="address"
        label="产品专利">
      </el-table-column>
    </el-table>
    </div> -->
<!--  美国FDA批准药物非活性成分数据库   -->
  		  <div class="childTip">美国FDA药品数据库（U.S. FDA Drugs Database）</div>
			<div class="tableBox" >
			
       <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="trade_name"
        label="商品名">
      </el-table-column>
        <el-table-column
        prop="application_number"
        label="申请号">
      </el-table-column>
        <el-table-column
        prop="product_id"
        label="产品号">
      </el-table-column>      
            <el-table-column
        prop="application_type"
        label="申请类型">
      </el-table-column>
            <el-table-column
        prop="active_ingredient"
        label="活性成分">
      </el-table-column>
            <el-table-column
        prop="dosage_form_or_route_of_administration"
        label="剂型/给药途径"
       >
      </el-table-column>
            <el-table-column
        prop="specification_or_dosage"
        label="规格/剂量"
        >
      </el-table-column>
            <el-table-column
        prop="RS"
        label="RS"
        >
      </el-table-column>
                  <el-table-column
        prop="RLD"
        label="RLD"
        >
      </el-table-column>
      
            <el-table-column
        prop="product_number_approval_date" 
        label="产品号批准日期">
      </el-table-column>      
            <el-table-column
        prop="applicant" 
        label="申请人">
      </el-table-column>
      <el-table-column
        prop="market_state"
        label="市场状态"
        >
      </el-table-column>

    </el-table>
    </div>  
<!--  美国FDA批准药物非活性成分数据库   -->
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
 import Header from '@/components/Header'
  export default {
    name: "Fdaresult",
    components:{
      ChildBanner,
      Header
    },
    data() {
      return {
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
                        this.$axios.get(`http://192.168.1.138:9003/FDAdrug/?${sea}&page=${val}`,{
        }).then(res=>{this.tableData=res.data.results;this.total=res.data.count;
          console.log(res);
          console.log(this.tableData)})
    },
        getdata2(val,sea){
                        this.$axios.get(`http://192.168.1.138:9003/FDAdrug/?pk=${sea}&page=${val}`,{
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