<template>
  <div class="login-index">
    <div class="content">
      <div class="content_input">
        <div class="title">
          <p>管理员登录</p>
        </div>
        <el-input v-model="UserName" clearable placeholder="用户名"></el-input>
        <el-input
          v-model="PassWord"
          clearable
          show-password
          placeholder="密码"
        ></el-input>
        <div class="content_button">
          <el-button type="primary" @click="SignIn">登录</el-button>
        </div>
      </div>
    </div>
    <div class="lottie">
      <lottie-player
        src="https://assets1.lottiefiles.com/packages/lf20_mb9ka7yz.json"
        :options="options"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginIndex',
  data() {
    return {
      UserName: '',
      PassWord: '',
      options: { autoplay: true, speed: 0.5, loop: true, width: '500px' }
    }
  },
  methods: {
    SignIn() {
      let username = this.UserName
      let password = this.PassWord
      if (!username) {
        this.$notify.error({
          title: '错误',
          message: '用户名不能为空'
        })
        return
      } else if (!password) {
        this.$notify.error({
          title: '错误',
          message: '密码不能为空'
        })
        return
      } else {
        this.$message({
          message: '登录成功！',
          type: 'success'
        })
        this.$router.replace('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 500px;
  height: 300px;
  box-sizing: border-box;
  padding: 0 50px;
  border-radius: 5px;
  box-shadow: 0px 2px 12px 0px rgba(105, 105, 105, 0.07);
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  transition: 1.5s;
}

.content_input {
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.content_button {
  margin-top: 10px;
}

.el-input {
  margin-bottom: 25px;
}

.title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 30px;
  font-weight: bold;
  color: #606266;
}

.el-button--primary {
  width: 100%;
}
.lottie {
  position: fixed;
  bottom: 0;
  right: 0;
}
</style>
