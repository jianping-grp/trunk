<template>
  <div>
    <div class="register">
      <!-- <LogoHeader></LogoHeader> -->
      <Header></Header>
      <div class="registerForm">
        <el-input class="input" :autofocus="true" placeholder="请输入用户名" v-model="formLabelAlign.username"></el-input>
        <el-input class="input" placeholder="请输入密码" v-model="formLabelAlign.password" show-password></el-input>
        <el-input class="input" placeholder="再次输入密码" v-model="formLabelAlign.passwordre" show-password></el-input>
        <el-button class="button" type="primary" @click="onSubmit">注册</el-button>
        <el-button class="button marginLeft0" @click="onCancel">返回</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import LogoHeader from '@/components/LogoHeader'
  import Header from '@/components/Header'
  export default {
    name: "Register",
    components:{
      LogoHeader,
      Header
    },
    data() {
      return {
        formLabelAlign:{
          username:'',
          password:'',
          passwordre:''
        }
      }
    },
    mounted() {
      
    },
    methods: {
      onSubmit() {
        if(!this.formLabelAlign.username || !this.formLabelAlign.password || !this.formLabelAlign.passwordre){
          this.$message.error('不能为空！');
          return;        
        }
        if(this.formLabelAlign.password !== this.formLabelAlign.passwordre){
          this.$message.error('两次密码输入不一致');  
          return;      
        }
        this.$router.push('/login');
      },
      onCancel(){
        this.$router.push('/home');
      }
    }
  }
</script>

<style scoped lang="scss">
.register{
  height: 100%;
  width:100%;
  position:absolute;
  background:#3DF2C5;
  .registerForm{
    width:30%;
    margin:0 auto;
    margin-top:100px;
    .input{
      margin-top:20px;
      border:none;
      input{
        color:red;
      }
    }

    .button{
      width:100%;
      background:#fff;
      color:#3DF2C5;
      margin-top:25px;
      border:none;
      font-size:14px;
    }
    .marginLeft0{
      margin-left:0px;
    }
  }
}
</style>
