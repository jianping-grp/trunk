<template>
  <div>
    <div class="Fdaresult">
      <ChildBanner></ChildBanner>
      <!-- 分子搜索页面 -->
      <div class='width70'>
        <div class='back'>
        <el-button  v-on:click="back" type="primary">返回搜索界面</el-button></div>
		  <div class="childTip">美国FDA药品专利数据库(U.S. FDA Drugs Patent Database)</div>
			<div class="tableBox" >
			
       <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="patent_number"
        label="专利号"
        >
      </el-table-column>
            <el-table-column
        prop="patent_expiration_date"
        label="专利到期日"
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
        >
      </el-table-column>
            <el-table-column
        prop="trade_name"
        label="商品名"
        >
      </el-table-column>
            <el-table-column
        prop="active_ingredient"
        label="活性成分"
        >
      </el-table-column>
            <el-table-column
        prop="dosage_form"
        label="剂型"
        >
      </el-table-column>
      <el-table-column
        prop="material_patent"
        label="物质专利"
        >
      </el-table-column>
      <el-table-column
        prop="product_patent"
        label="产品专利">
      </el-table-column>
      <el-table-column
        prop="use_patent"
        label="用途专利">
      </el-table-column>      
    </el-table>
    </div>
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
    name: "Fdaresult",
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
                        this.$axios.get(`http://${this.token}/FDAPatent/?${sea}&page=${val}`,{
        }).then(res=>{this.tableData=res.data.results;this.total=res.data.count;
          console.log(res);
          console.log(this.tableData)})
    },
        getdata2(val,sea){
                        this.$axios.get(`http://${this.token}/FDAPatent/?${sea}&page=${val}`,{
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