<template>
  <div class="childTable">
    <div class="childTip">Showing {{meta.per_page}} of {{meta.total_results}} availiable item</div>
        <el-table 
          :data="data" 
          row-key="target_based_actions+drug_name"
          :expand-row-keys="expands"
          @row-click="rowClick"
          class="tableBox"
          v-loading="loading"
        >
          <el-table-column type="expand">
            <template slot-scope="props">
              
                <el-form :inline="true" class="demo-form-inline">
                  <el-form-item label="Inactive Company:" >
                    {{ props.row.inactive_companies }}
                  </el-form-item>
                  <!-- <el-form-item label="Active Indication:">
                    {{ props.row.active_indications }}
                  </el-form-item> -->
                  <el-form-item label="Inactive Indications:">
                    {{ props.row.inactive_indications}}
                  </el-form-item >
                  <el-form-item label="Technologies:">
                    {{ props.row.technologies}}
                  </el-form-item >
                  <!-- <el-form-item  class="buttonText">
                    <a href="###">Paper</a>
                  </el-form-item > -->
                </el-form>

            </template>
          </el-table-column>
          <el-table-column
            prop="index"
            width="60px"
            align="center"
            label="">
          </el-table-column>
          <el-table-column label="Drug Name" prop="drug_name">
          </el-table-column>
          <el-table-column label="Other Drug Names" prop="other_drug_names">
          </el-table-column>
          <el-table-column label="Target" prop="target_based_actions">
          </el-table-column>
          <el-table-column label="Active Indications" prop="active_indications">
          </el-table-column>
          <el-table-column label="Company" prop="originator_company">
          </el-table-column>
          <el-table-column label="Actions" prop="other_actions">
          </el-table-column>          
          <el-table-column label="Status" prop="highest_status">
          </el-table-column>
        </el-table>
  </div>
</template>

<script>
  export default {
    name: "Childtable",
    components:{
      // ChildBanner
    },
    props:{
      data:{
        type:Array,
        default: []
      },
      meta:{
        type:Object,
        default: {}
      }
    },
    
    data() {
      return {
        expands:[],
        
      }
    },
    mounted() {
      console.log(this.tableData)
       this.loading=true;
    },
    methods: {
      rowClick(row, event, column) {
        Array.prototype.remove = function (val) {
            let index = this.indexOf(val);
            if (index > -1) {
                this.splice(index, 1);
            }
        };

        if (this.expands.indexOf(row.drug_name) < 0) {
            this.expands.push(row.drug_name);
        } else {
            this.expands.remove(row.drug_name);
        }

      },


    }
  }
</script>

<style scoped lang="scss">
.childTable{
  .el-form-item{
    margin-bottom:0px;
    margin-right: 50px;
  }
  .buttonText{
    float:right;
    display:inline;
    a{
      color:#2EA6F6;
    } 
  }
  .childTip{
    color:#101010;
    font-size:14px;
    margin-top:50px;
  }
  .tableBox{
    margin-top:20px;
  }
}
</style>
