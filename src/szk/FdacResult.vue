<template>
  <div>
    <div class="Fdaresult">
      <ChildBanner></ChildBanner>
      <!-- 分子搜索页面 -->
      <div class='width70'>
<!--  美国FDA药品橙皮书数据库   -->
        <div class='back'>
        <el-button  v-on:click="back" type="primary">返回搜索界面</el-button></div>
  		  <div class="childTip">美国FDA药品橙皮书数据库(U.S. FDA Orange Book: Approved Drug Products with Therapeutic Equivalence Evaluations)</div>
			<div class="tableBox" >
			
       <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="trade_name"
        label="商品名"
        >
      </el-table-column>
            <el-table-column
        prop="application_number"
        label="申请号"
        >
      </el-table-column>
            <el-table-column
        prop="product_id"
        label="产品号"
        width="150">
      </el-table-column>
            <el-table-column
        prop="application_type"
        label="申请类型"
        >
      </el-table-column>
            <el-table-column
        prop="active_ingredient"
        label="活性成分"
        width="150">
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
        prop="reference_drug_or_not"
        label="是否参比药物"
        >
      </el-table-column>
      <el-table-column
        prop="bioequivalence_reference_standard_or_not"
        label="是否生物等效参考标准"
        >
      </el-table-column>      
      <el-table-column
        prop="applicant"
        label="申请人">
      </el-table-column>
      <el-table-column
        prop="market_state"
        label="市场状态">
      </el-table-column>
    </el-table>
    </div>  
<!--  美国FDA药品橙皮书数据库   -->
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
  export default {
    name: "Fdacresult",
    components:{
      ChildBanner
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
                        this.$axios.get(`http://192.168.1.138:9003/FDAdrugOrangeBook/?${sea}&page=${val}`,{
        }).then(res=>{this.tableData=res.data.results;this.total=res.data.count;
          console.log(res);
          console.log(this.tableData)})
    },
        getdata2(val,sea){
                        this.$axios.get(`http://192.168.1.138:9003/FDAdrugOrangeBook/?pk=${sea}&page=${val}`,{
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