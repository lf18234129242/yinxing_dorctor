<template>
  <div class="LoginDoctor">
    <h1>登录</h1>
    <div class="cell-box">
      <p>姓名</p>
      <input type="text" v-model="username" placeholder="请输入您的账号" />
    </div>
    <div class="cell-box">
      <p>密码</p>
      <input type="password" v-model="password" placeholder="请输入您的密码" />
    </div>
    <van-button type="primary" color="#16A332" :disabled="loginDis" @click="login">登录</van-button>
  </div>
</template>

<script>
export default {
  name: 'LoginDoctor',
  data() {
    return {
      username: '',
      password: '',
      loginDis: false
    }
  },
  methods: {
    login() {
      if (this.username.trim() === "") {
        this.$toast("请输入您的账号");
        return false;
      }
      if (this.password.trim() === "") {
        this.$toast("请选择您的密码");
        return false;
      }
      this.loginDis = true
    }
  },
}
</script>

<style lang="scss" scoped>
.LoginDoctor{
  width: 100%;
  position: absolute;
  .van-button {
    width: 100%;
    height: 1.76rem;
    position: fixed;
    bottom: 0;
    left: 0;
    font-size: 0.56rem;
    color: #fff;
  }
  h1 {
    font-size: 0.96rem;
    font-weight: 600;
    color: #333;
    width: 100%;
    height: 0.96rem;
    margin-top: 2.18rem;
    margin-bottom: 2.8rem;
    padding-left: 0.96rem;
    box-sizing: border-box;
  }
  .cell-box {
    width: 100%;
    // height: 150px;
    padding: 1.4rem 1.6rem 1.2rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    p {
      width: 2rem;
      font-size: 0.56rem;
      font-weight: 400;
      margin-right: 0.6rem;
      line-height: 0.6rem;
      position: relative;
    }
    input {
      width: 8.1rem;
      height: 0.6rem;
      border: none;
      font-size: 0.52rem;
      padding: 0;
      background: #fff;
    }
    p::after {
      content: "";
      position: absolute;
      left: 1.6rem;
      bottom: -1.02rem;
      width: 10.1rem;
      height: 0.02rem;
      background: #d0d0d0;
    }
  }
}
</style>