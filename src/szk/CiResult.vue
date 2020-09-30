<template>
  <div>
    <div class="Fdaresult">
     <!-- <ChildBanner></ChildBanner>-->
      <!-- 分子搜索页面 -->
      <div class='width70'>
<!--  美国FDA药品橙皮书数据库   -->
  		  <div class="childTip">化学物质索引数据库(Chemical Index Database)</div>
			<div class="tableBox" >
			
       <el-table
      :data="tableData"
      stripe
      class="tablebox"
      style="width: 100%">
      <el-table-column
        prop="title"
        label="商品名"
        >
      </el-table-column>
            <el-table-column
        prop="CAS_registry_number"
        label="CAS_registry_number"
        >
      </el-table-column>
            <el-table-column
        prop="absorption_maximum"
        label="absorption_maximum"
        >
      </el-table-column>
            <el-table-column
        prop="keywords"
        label="keywords"
        >
      </el-table-column>
            <el-table-column
        prop="molecular_formula"
        label="molecular_formula"
        width="150">
      </el-table-column>
            <el-table-column
        prop="molecular_weight"
        label="molecular_weight"
        >
      </el-table-column>
            <el-table-column
        prop="melting_point"
        label="melting_point"
        >
      </el-table-column>
      <el-table-column
        prop="pKa"
        label="pKa"
        >
      </el-table-column>
      <el-table-column
        prop="logP"
        label="logP"
        >
      </el-table-column>      
      <el-table-column
        prop="toxicity_data"
        label="toxicity_data">
      </el-table-column>
      <el-table-column
        prop="absorption_maximum"
        label="absorption_maximum">
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
    name: "Fdaresult",
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
    getdata(val,sea){
                        this.$axios.get(`http://192.168.1.138:9003/ChemicalIndex/?${sea}&page=${val}`,{
        }).then(res=>{this.tableData=res.data.results;this.total=res.data.count;
          console.log(res);
          console.log(this.tableData)})
    },
        getdata2(val,sea){
                        this.$axios.get(`http://192.168.1.138:9003/ChemicalIndex/?pk=${sea}&page=${val}`,{
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
//   .tablebox{
// overflow-x:auto,overflow-y:hidden
//       td{
//           overflow-y:hidden;overflow-x:hidden;
//           padding: 10px 0 !important;
// height:50px;
//       }
//   }
    .childTip{
    color:#101010;
    font-size:14px;
    margin-top:50px;
  }
    .tableBox{
    margin-top:20px;
  }
</style>