<template>
  <div>
    <div class="moleculeStucture">
      <ChildBanner :show="true" :data='searchinput'></ChildBanner>
      <!-- 分子搜索页面 -->
      <div class='width70'>
		  <div class="childTip"><h2>Show details of the  compound</h2></div>
			<div class="tableBox" >
			            <div class="content" v-loading="loading">
                <div class="searchtext"> <b>Main</b></div>
                <div class="row">
                <div><div class="name"><b>Main ID:</b></div>{{tableData.name}}</div>
                <div><div class="name"><b>Name:</b> </div>{{tableData.pref_name}}</div>
                <div><div class="name"><b>Chembl ID:</b></div><a :href="'https://www.ebi.ac.uk/chembl/compound_report_card/'+tableData.chembl_id" target="_blank">{{tableData.chembl_id}}</a></div>
                <div><div class="name"><b>Phase:</b></div>{{tableData.max_phase}}</div>
                <div><div class="name"><b>Standard Inchi Key:</b></div>{{tableData.standard_inchi_key}}</div>
                <div><div class="name"><b>Canonical Smiles:</b></div>{{tableData.canonical_smiles}}</div>
                <div><div class="name"><b>Structure Type:</b></div>{{tableData.structure_type}}</div>    
                <div><div class="name"><b>Molecule Type:</b></div>{{tableData.molecule_type}}</div>    
                <div><div class="name"><b>First Approval:</b></div>{{tableData.first_approval}}</div>    
                <div><div class="name"><b>Target Based Actions:</b></div>{{tableData.Target_based_Actions}}</div>  
                <div><div class="name"><b>Active Indications:</b></div>{{tableData.Active_Indications}}</div>                                                                                                                                                        
            </div>    
            </div> 
	<!-- <table  style="width: 80%" :row-class-name="tableRowClassName" >
      <tr class='blue'>
        <td>Database Id</td>
        <td>{{ar1[0].database_id}}</td>
      </tr>
      <tr class='red'>
				<td>Formula</td>
				<td>{{ar1[0].formula}}</td>
			</tr>
			<tr class="success">
				<td>Slogp</td>
				<td>{{ar1[0].slogp}}</td>
			</tr>
				<tr class='red'>
				<td>Tpsa</td>
				<td>{{ar1[0].tpsa}}</td>
			</tr>
			<tr class="warning">
				<td>Amw</td>
				<td>{{ar1[0].amw}}</td>
      </tr>
      <tr class='red'>
        <td>Numrings</td>
        <td>{{ar1[0].numrings}}</td>
      </tr>
      <tr class="info">
				<td>Canonical_smiles</td>
				<td>{{ar1[0].canonical_smiles}}</td>
      </tr>
      <tr class='red'>
				<td>Numrotatablebonds</td>
				<td>{{ar1[0].numrotatablebonds}}</td>
      </tr>
      <tr class='blue'>
				<td>Numhbd</td>
				<td>{{ar1[0].numhbd}}</td>
      </tr>
      <tr class='red' >
			  <td>Numhba</td>
				<td>{{ar1[0].numhba}}</td>
      </tr>
      <tr class="warning">
				<td>Numheavyatoms</td>
				<td>{{ar1[0].numheavyatoms}}</td>
		  </tr>
		  <tr class='red'>
			  <td>Chembl Id</td>
			  <td><a  :href="'https://www.ebi.ac.uk/chembl/compound_report_card/'+ar2[0].chembl_id" target="_blank" >{{ar2[0].chembl_id}}</a>
        </td>
      </tr>
      <tr class="info">
	      <td>Sn Id</td>
	      <td>{{ar2[0].sn_id}}</td>
      </tr>
      <tr class='red'>
	      <td>Pubchem Cid</td>
	      <td><a :href='"https://pubchem.ncbi.nlm.nih.gov/compound/"+ar2[0].pubchem_cid' target="_blank">{{ar2[0].pubchem_cid}}</a></td>
      </tr>
      <tr class="success">
        <td>Np Id</td>
	      <td>{{ar2[0].np_id}}</td>
      </tr>
      <tr class='red' >
	      <td>Iupac Name</td>
	      <td>{{ar3[0].iupac_name}}</td>
      </tr>
      <tr class="warning">
	      <td>Pref Name</td>
	      <td>{{ar3[0].pref_name}}</td>
      </tr>
      <tr class='red'>
        <td>Cas</td>
	      <td>{{ar3[0].cas}}</td>
       </tr>
  </table>  -->
  </div>
  </div>  
 </div>
</div>

</template>

<script>
  import ChildBanner from '@/components/ChildBanner'
    import global from '@/common/global'
  export default {
    name: "detail",
    components:{
      ChildBanner
    },
    data() {
      return {
        token:global.token,
        radio:'Structure',
        value:0.6,
        jsmeApplet:'',
		    tableData:[],
		    ar2:[],
		    ar3:[],
		    id:''
      }
    },
    methods:{
		 tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      },
      search(){
        var drawing = document.JME.smiles();
        var jme = document.JME.jmeFile();
        var mol = document.JME.molFile();
        console.log(drawing, this.radio, this.value)
        this.$router.push({path:'/moleculeStuctureDe',query:{id:drawing,id1:this.radio,id2:this.value}})
      },
      jsmeOnLoad() {
        this.jsmeApplet = new JSApplet.JSME("jsme_container", "380px", "340px", {
           "options" : "oldlook,star"
        });
        document.JME = this.jsmeApplet;
	  },
      getData(sea){this.$axios.get(`http://${this.token}/InfoDrug/?name=${sea}`,
	  {}).then(res=>{this.tableData=res.data.info_drugs[0],
        console.log(res)})},
	  // getData1(sea){this.$axios.get(`http://192.168.1.138:9003/NPidinotherdatabase/?database_id=${sea}`,
	  // {}).then(res=>{this.ar2=res.data.n_pidinotherdatabases,
    //     console.log(this.ar2)})},
	  // getData2(sea){this.$axios.get(`http://192.168.1.138:9003/NPenglishnamecas/?database_id=${sea}`,
	  // {}).then(res=>{this.ar3=res.data.n_penglishnamecas,
    //     console.log(res)})},
    },
    mounted() {
	  //   this.jsmeOnLoad(),
	   this.id=this.$route.params.id,
     console.log(this.id)
     this.getData(this.id),
     this.getData1(this.id)
     this.getData2(this.id)
    }
  }
</script>

<style scoped lang="scss">
 .width70{
    width:70%;
    margin: 0 auto;
    a{
      color: rgb(68, 153, 250);
    }
    h2{
        color: #163DB2;
        margin-bottom:30px;
        margin-top :30px;
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
// .el-table .warning-row {
//     background: oldlace;
//   }

//   .el-table .success-row {
//     background: #f0f9eb;
//   }
// table{
// 	width:100%;
// 	border:1px solid #DCDFE6
// }
// tr{
// 	height:25px;

// }
// .warning{
// 	background-color:#E6A23C
// }
// .info{
// 	background-color:#909399
// }
// .success{
// 	background-color:#67C23A
// }
// .blue{
// 	background-color:#409EFF
// }
// .red{
// 	background-color:#DCDFE6
// }
// .moleculeStucture{
//   .width70{
//       width: 70%;
//       margin: 0 auto;
//   }
//   .table{
// width:50%
//   }
//   .content{
//     margin-top:40px;
//     display:flex;
//     justify-content: space-evenly;
//   }

//   .radioStyle{
//     height:30px;
//     margin-bottom:30px;
//     font-size:21px;
//     font-weight:bold;
//   }

//   .title{
//     height:30px;
//     margin-bottom:20px;
//     font-size:25px;
//   }

//   .buttonStyle{
//     background-color:#3DF2C5;
//     color:white;
//     width:335px
//   }

//   .numStyle{
//     height:30px;
//     margin-bottom:20px;
//   }
//   .childTip{
//     color:#101010;
//     font-size:16px;
//     margin-top:50px;
//   }
//     .width70{
//     width: 70%;
//     margin: 0 auto;
//   }
//   .tableBox{
//     margin-top:20px;
//   }


</style>