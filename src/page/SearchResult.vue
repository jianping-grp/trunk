<template>
  <div>
    <div class="searchResult">
    <ChildBanner :show="true" :data='searchinput'></ChildBanner>
      <div class='content width70'>
        <!-- <Childtable :data='tableData' :meta='meta' :loading='loading'></Childtable> -->
            <div class="childTip">Showing {{meta.per_page}} of {{meta.total_results}} availiable item</div>
        <el-table 
          :data="tableData" 
          row-key="id"
          :expand-row-keys="expands"
          @row-click="rowClick"
          :header-cell-style="{color: '#848484',fontSize:'22px', background: '#qua'}"
          :cell-style="{fontSize:'20px'}"
          class="tableBox"
          v-loading="loading"
        >
          <el-table-column type="expand">
            <template slot-scope="props">
              
                <el-form :inline="true" class="demo-form-inline">
                  <el-form-item label="First Approval:" >
                    {{ props.row.first_approval }}
                  </el-form-item>
                  <!-- <el-form-item label="Active Indication:">
                    {{ props.row.active_indications }}
                  </el-form-item> -->
                  <el-form-item label="Standard Inchi Key:">
                    {{ props.row.standard_inchi_key}}
                  </el-form-item >
                  <el-form-item label="Canonical Smiles:">
                    {{ props.row.canonical_smiles}}
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
          <el-table-column label="Drug Name" prop="pref_name">
          </el-table-column>
          <el-table-column label="ID" prop="name">
          </el-table-column>
          <el-table-column label="Trade Name" prop="trade_name">
          </el-table-column>
          <el-table-column label="Active Indications" prop="Active_Indications">
          </el-table-column>
          <el-table-column label="Structure Type" prop="structure_type">
          </el-table-column>
          <el-table-column label="Molecule Type" prop="molecule_type">
          </el-table-column>          
          <el-table-column label="Max Phase" prop="max_phase">            
          </el-table-column>
          <!-- <div id="jsme_container" code="JME.class" name="JME"  archive='JME.jar' codebase='.' width='360' height='315'></div> -->
          <!-- <el-table-column label="1" prop="canonical_smiles" id="jsme_container" code="JME.class" name="JME"  archive='JME.jar' codebase='.' width='360' height='315'>
            
          </el-table-column> -->
        </el-table>
          <el-pagination
          background
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :total="meta.total_results">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
import ChildBanner from '@/components/ChildBanner'
import Childtable from '@/components/Childtable'
import global from '@/common/global'
export default {
  name: "SearchResult",
  components: {
    ChildBanner,
    Childtable
  },
  data() {
    return {
      token:global.token,
      param:'',
      meta:{},
      tableData: [],
      searchinput:'',
      expands:[],
      shuju:[],
    }
  },
  mounted() {
      this.searchinput=this.$route.params.id;
      // this.getdata(1,this.searchinput);
      //  this.loading=true;
      this.jsmeOnLoad()
  },
  watch:{
    $route(){
      this.searchinput=this.$route.params.id;
    },
    searchinput(){
      this.getdata(1,this.searchinput);
      console.log(this.token);
    }
  },
  methods:{
    jsmeOnLoad() {
        this.jsmeApplet = new JSApplet.JSME("jsme_container", "380px", "340px", {
           "options" : "oldlook,star"
        });
        document.JME = this.jsmeApplet;
      },
        getdata(page,sea){this.$axios.get(`http://${this.token}/InfoDrug/?search=${sea}&page=${page}`,{
          }).then(res=>{this.tableData=res.data.info_drugs;this.meta=res.data.meta;
           
            console.log(res);
            this.loading=false;
            }) 
            },    
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`)
          this.getdata(val,this.searchinput);
        },
        rowClick(row, event, column) {
          Array.prototype.remove = function (val) {
              let index = this.indexOf(val);
              if (index > -1) {
                  this.splice(index, 1);
              }
          };
          if (this.expands.indexOf(row.id) < 0) {
              this.expands.push(row.id);
          } else {
              this.expands.remove(row.id);
          }

        },
  }
}

</script>
<style scoped lang="scss">
.searchResult{
  .width70{
    width: 85%;
    margin: 0 auto;
  }
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
    font-size:25px;
    margin-top:50px;
  }
  .tableBox{
    margin-top:20px;
    
  }
}
</style>
