<template>
  <div>
    <div class="Fdaresult">
      <ChildBanner></ChildBanner>
      <!-- 分子搜索页面 -->
      <div class='width70'>
<!--  美国FDA批准药物非活性成分数据库   -->
        <div class='back'>
        <el-button  v-on:click="back" type="primary">返回搜索界面</el-button></div>
  		  <div class="childTip">美国FDA批准药物非活性成分数据库(Inactive Ingredient Search for Approved Drug Products)</div>
			<div class="tableBox" >
			
       <el-table
      :data="tableData"
      stripe
      style="width: 100%">
      <el-table-column
        prop="inactive_ingredient"
        label="非活性成分名称"
        >
      </el-table-column>
            <el-table-column
        prop="route"
        label="给药途径"
        >
      </el-table-column>
            <el-table-column
        prop="dosage_form"
        label="剂型"
        >
      </el-table-column>
            <el-table-column
        prop="cas_number"
        label="CAS登记号"
        >
      </el-table-column>
            <el-table-column
        prop="UNII"
        label="唯一标识码"
        >
      </el-table-column>
        <el-table-column
        prop="maximum_potency_per_unit_dose" 
        label="最大用量"
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
   import global from '@/common/global'
  export default {
    name: "Fhxresult",
    components:{
      ChildBanner
    },
    data() {
      return {
        token:global.token,
        fzy:'',
        tableData:[],
        total:{}
      }
    },
    mounted() {
      this.fzy=this.$route.query.id,
      this.getdata(1,this.fzy)
    },

    methods:{
            back(){
        this.$router.go(-1)
      },
    getdata(val,sea){
        this.$axios.get(`http://${this.token}/InactiveIngredientSearch/?${sea}&page=${val}`,{
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