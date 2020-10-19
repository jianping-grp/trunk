<template>
  <div>
    <div class="clinicalResult">
      <ChildBanner :show="true" :data='searchinput'></ChildBanner>
      <!-- 临床搜索页面 -->
      <div class="childTip width70">Showing {{10}} of {{total}} availiable item</div>
      <el-radio-group v-model="tabPosition" class="clinicaltab width70" @change="tabClick">
        <el-radio-button label="Early">Early Phase1</el-radio-button>
        <el-radio-button label="1">Phase1</el-radio-button>
        <el-radio-button label="2">Phase2</el-radio-button>
        <el-radio-button label="3">Phase3</el-radio-button>
        <el-radio-button label="4">Phase4</el-radio-button>
        <el-radio-button label="nan">Not App licable</el-radio-button>
      </el-radio-group>
      <div class="clinicalBox width70">
        <el-table
          :data="tableData"
          :header-cell-style="{color: '#848484',fontSize:'22px', background: '#qua'}"
          :cell-style="{fontSize:'20px'}"
          v-loading="loading"
          style="width: 100%">
          <!-- <el-table-column
            prop="index"
            width="60px"
            align="center"
            label="">
          </el-table-column>

          <el-table-column
            prop="title"
            label="Title">
          </el-table-column>
          <el-table-column
            prop="status"
            label="Status">
          </el-table-column>
          <el-table-column
            prop="intervention"
            label="Intervention">
          </el-table-column>
          <el-table-column
            prop="location"
            label="Location">
          </el-table-column>
          <el-table-column
            prop="condation"
            label="Condation">
          </el-table-column> -->
          <el-table-column
            prop="phase"
            label="Phase">
          </el-table-column>
          <el-table-column
            prop="main_id"
            label="Main ID">
             <template slot-scope="scope">
              <router-link :to="{name:'ClinicalDetail',query:{id:scope.row.main_id}}">
              <a href="#/"
              target="_blank"
              class='buttonText'>
              {{scope.row.main_id}}</a>
              </router-link>
            </template>
          </el-table-column>          
          <el-table-column
            prop="public_title"
            label="Public Title">
            <template slot-scope="scope">
              <router-link :to="{name:'ClinicalDetail',query:{id:scope.row.main_id}}">
              <a href="#/"
              target="_blank"
              class='buttonText'>
              {{scope.row.public_title}}</a>
              </router-link>
            </template>
          </el-table-column>
          <el-table-column
            prop="date_of_registration"
            label="Date of Registration">
          </el-table-column>
          <el-table-column
            prop="recruitment_status"
            label="Recruitment status">
          </el-table-column>
        </el-table>
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
    name: "ClinicalResult",
    components:{
      ChildBanner
    },
    data() {
      return {
        token:global.token,
        searchinput:'',
        tabPosition: '1',
        total:50,
        tableData: [],
           
      }
    },
    mounted() {
      this.searchinput=this.$route.params.id;
      this.loading=true,  
      this.getdata(1,this.searchinput,this.tabPosition);
      // this.getdata(1,this.searchinput);
    },
    watch:{
      $route(){
        this.searchinput=this.$route.params.id;
      },
      searchinput(){
      this.getdata(1,this.searchinput,this.tabPosition);
      }
  },
    methods:{
      tabClick(tabLable){
      this.getdata(1,this.searchinput,this.tabPosition);
        console.log(tabLable);
        // console.log(this.tabPosition)
      },
      getdata(page,sea,phase){this.$axios.get(`http://${this.token}/InfoClinical2/?page=${page}&pk1=${sea}&pk2=${phase}`,{
        }).then(res=>{this.tableData=res.data.results;this.total=res.data.count;
          console.log(res);
          console.log(this.tableData)
          this.loading=false;
          })},    
        //   getdata(page,sea){this.$axios.get(`http://192.168.1.138:9003/ClinicalBrowse/?page=${page}&search=${sea}`,{
        // }).then(res=>{this.tableData=res.data.clinicalbrowses;this.total=res.data.meta.total_results;
        //   console.log(res);
        //   console.log(this.tableData)
        //   this.loading=false;
        //   })},    
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
        this.getdata(val,this.searchinput);
      }
    }

  }
</script>

<style scoped lang="scss">
.clinicalResult{
  .width70{
    width: 80%;
    margin: 0 auto;
  }
  .childTip{
    color:#101010;
    font-size:25px;
    margin-top:50px;
  }
  .clinicaltab{
    margin-top:20px;
    display: block;
  }
  .clinicalBox{
    background:#fff;
    margin-top:20px;
  }
}

</style>
