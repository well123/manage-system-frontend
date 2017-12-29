<template>
  <el-form ref="userInfo" :rules="rules" :model="userInfo" id="loginForm" :status-icon="true">
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="userInfo.phone"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="userInfo.password" type="password"></el-input>
    </el-form-item>
    <el-button type="primary" @click="login('userInfo')" style="width:100%">登录</el-button>
  </el-form>
</template>

<style>
  #loginForm {
    margin: auto;
    width: 300px;
  }
</style>

<script>
  export default {
    data () {
      return {
        rules: {
          phone: [
            {
              required: true,
              message: '请输入手机号',
              trigger: 'blur'
            },
            {
              min: 11,
              max: 14,
              message: '请填写正确的手机号',
              trigger: 'blur'
            }
          ],
          password: [
            {
              required: true,
              message: '请输入密码',
              trigger: 'blur'
            }
          ]
        },
        userInfo: {
          phone: '',
          password: ''
        }
      }
    },
    methods: {
      login (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            if (this.userInfo.phone === '17665460804' && this.userInfo.password === '17665460804') {
              this.$store.commit('setUser', this.userInfo)
              this.$router.push({
                path: this.$route.query.redirect
              })
            }
          } else {
            console.log(1)
            return false
          }
        })
      }
    }
}
</script>