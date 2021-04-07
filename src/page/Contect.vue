<template>
  <div>
    <div class="contect">
      <!-- <Header></Header> -->
      <ChildBanner :show="true" :data='searchinput'></ChildBanner>
      <div class='content'>
      <h2>如果有什么好的意见和建议想要联系我们，可以填写这个表格！</h2>
        <el-form ref="ruleForm" :model="ruleForm" label-width="80px">
          <el-form-item label="姓名">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
            <el-form-item label="电话">
            <el-input v-model="ruleForm.tel"></el-input>
          </el-form-item>
            <el-form-item label="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="建议">
            <el-input type="textarea" v-model="ruleForm.desc"></el-input>
          </el-form-item>
          <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>

      </div>
      
    </div>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  import ChildBanner from '@/components/ChildBanner'
    import global from '@/common/global'
  export default {
    name: "Contect",
    components:{
      Header,
      ChildBanner
    },
    data() {
      return {
        token:global.token,
          ruleForm:{
          name: '',
          tel: '',
          email: '',
          desc: '',
        }
      }

      
    },
        methods: {
      submitForm(ruleForm) {
        // this.$refs[formName].validate((valid) => {
        //   if (valid) {
        //     alert('提交成功!');
        //   } else {
        //     console.log('提交失败，再提交一次吧!!');
        //     return false;
        //   }
        // });
        console.log(this.ruleForm)
        const body={
          advice:{
            name:this.ruleForm.name,
            phone:this.ruleForm.tel,
            email:this.ruleForm.email,
            advice:this.ruleForm.desc
          }
        }
        console.log(body)
        this.$axios.post(`http://${this.token}/Advice/`,body).then(
          res=>{   
                   if (res) {
            alert('提交成功!');
          } else {
            alert('提交失败，再提交一次吧!!');
            return false;
          }
          }
        )
        console.log(321)
      },
      resetForm(formName) {
        console.log(123)
         this.ruleForm={
          name: '',
          tel: '',
          email: '',
          desc: '',
        }
        this.$refs[formName].resetFields();
      }
    },
    mounted() {
      
    }
    
  }
</script>

<style scoped lang="scss">
.content{
  width:800px;
  margin:0 auto;
  margin-top:50px;
}
h2{
  text-align: center;
  margin-bottom:50px;
}
</style>
