<template>
  <div>
    <div class="clinicalResult">
      <ChildBanner :show="true" :data='searchinput'></ChildBanner>
     <div class="width85">
            <!-- 美国FDA药品橙皮书数据库 -->
            <h3></h3>
            <h4></h4>
            <div class="content" v-loading="loading">
                <div class="searchtext"> <b>Main</b></div>
                <div class="row">
                <div><div class="name"><b>Last refreshed on:</b></div>{{tableData.last_refreshed_on}}</div>
                <div><div class="name"><b>Main ID:</b> </div>{{tableData.main_id}}</div>
                <div><div class="name"><b>Date of registration:</b></div>{{tableData.date_of_registration}}</div>
                <div><div class="name"><b>Primary sponsor:</b></div>{{tableData.primary_sponsor}}</div>
                <div><div class="name"><b>Public title:</b></div>{{tableData.public_title}}</div>
                <div><div class="name"><b>Scientific title:</b></div>{{tableData.scientific_title}}</div>
                <div><div class="name"><b>Date of first enrolment:</b></div>{{tableData.date_of_first_enrolment}}</div>
                <div><div class="name"><b>Target sample size:</b></div>{{tableData.target_sample_size}}</div>
                <div><div class="name"><b>Recruitment status:</b></div>{{tableData.recruitment_status}}</div>
                <div><div class="name"><b>URL:</b></div><el-link  :underline="false" :href="tableData.url"  target="_blank">{{tableData.url}}</el-link></div>
                <div><div class="name"><b>Study type:</b></div>{{tableData.study_type}}</div>
                <div><div class="name"><b>Study design:</b></div>{{tableData.study_design}}</div>
                <div><div class="name"><b>Phase:</b></div>{{tableData.phase}}</div>  
                <div><div class="name"><b>Countries of recruitment:</b></div>{{tableData.countries_of_recruitment}}</div>                                                                                                                                                           
                <div class="searchtext2"> <b>Key Inclusion Exclusion Criteria</b></div>
                <div class="text">{{tableData.key_inclusion_exclusion_criteria}}</div>
                <div><div class="name"><b>Age minimum:</b></div>{{tableData.age_minimum}}</div> 
                <div><div class="name"><b>Age maximum:</b></div>{{tableData.age_maximum}}</div> 
                <div><div class="name"><b>Gender:</b></div>{{tableData.gender}}</div> 
                <div class="searchtext"> <b>Intervention(s)</b></div>
                <div class="text">{{tableData.intervention}}</div> 
                <div class="searchtext"> <b>Primary Outcome(s)</b></div>
                <div class="text">{{tableData.primary_outcome}}</div> 
                <div class="searchtext"> <b>Secondary Outcome(s)</b></div>
                <div class="text">{{tableData.secondary_outcome}}</div>
                <div class="searchtext"> <b>Secondary ID(s)</b></div>
                <div class="text">{{tableData.secondary_id}}</div>
                <div class="searchtext"> <b>Source(s) of Monetary Support</b></div>
                <div class="text">{{tableData.source_of_monetary_support}}</div>
                <div class="searchtext"> <b>Secondary Sponsor(s)</b></div>
                <div class="text">{{tableData.secondary_sponsor}}</div>
            </div>    
            </div> 
            </div>       
            <!-- 美国FDA药品橙皮书数据库 -->   
    </div>
  </div>
</template>

<script>
  import ChildBanner from '@/components/ChildBanner'
  export default {
    name: "ClinicalDetail",
    components:{
      ChildBanner
    },
    data() {
      return {
        searchinput:'',
        tabPosition: '1',
        total:50,
        tableData: [],
           
      }
    },
    mounted() {
      this.searchinput=this.$route.query.id;
      this.loading=true,  
      // this.getdata(1,this.searchinput,this.tabPosition);
      this.getdata(1,this.searchinput);
      console.log(this.searchinput);
    },
    watch:{
      $route(){
        this.searchinput=this.$route.params.id;
      },
      searchinput(){
        this.getdata(1,this.searchinput);
      }
  },
    methods:{
      tabClick(tabLable){
        this.getdata(1,this.searchinput);
        console.log(tabLable);
        // console.log(this.tabPosition)
      },
      // getdata(page,sea,phase){this.$axios.get(`http://192.168.1.138:9003/InfoClinical2/?page=${page}&pk1=${sea}&pk2=${phase}`,{
      //   }).then(res=>{this.tableData=res.data.results;this.total=res.data.count;
      //     console.log(res);
      //     console.log(this.tableData)
      //     this.loading=false;
      //     })},    
          getdata(page,sea){this.$axios.get(`http://192.168.1.138:9003/ClinicalDetail/?page=${page}&main_id=${sea}`,{
        }).then(res=>{this.tableData=res.data.clinicaldetails[0];this.total=res.data.meta.total_results;
          console.log(res);
          console.log(this.tableData)
          this.loading=false;
          })},    
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`)
        this.getdata(val,this.searchinput);
      }
    }

  }
</script>

<style scoped lang="scss">
.clinicalResult{
  .width85{
    width:85%;
    margin: 0 auto;
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
        .riqi{
             width:150px;
             display:inline-block;
         }
    }
}
}

</style>