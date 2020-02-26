<template>
  <div class="wechatCode">
    <h1 v-if="flag == '1'">您的信息已经提交。</h1>
    <h2>亲爱的{{userName}}，下面是我的公益服务群，欢迎您的加入。我会不定期做一些分享和科普。</h2>
    <h3>————{{doctorName}}医生</h3>
    <img :src="doctorCode" />
    <li>1. 长按中间的二维码</li>
    <li>2. 前往图中的群聊</li>
  </div>
</template>

<script>
import url from "./../apiconfig";
import { getStrParam, count } from "./../count";
export default {
  data() {
    return {
      doctorCode: "",
      token: "",
      push_id: "",
      doctorName: '',
      userName: '',
      flag: '',
    };
  },
  mounted() {
    let token = sessionStorage.getItem("token");
    let push_id = sessionStorage.getItem("push_id");
    this.token = token;
    this.push_id = push_id;
    if (!token) {
      let href = window.location.href
      // let href = "https://www.okginko.com/index.html?token=ouYrs1Y3ri3ke2Wyk-7Q7njCAE4o&push_id=2";
      this.token = getStrParam(href, "token");
      this.push_id = getStrParam(href, "push_id");
      count(this.push_id, this.token);
      sessionStorage.setItem("token", this.token);
      sessionStorage.setItem("push_id", this.push_id);
    }
    this.getCode();
  },
  methods: {
    getCode() {
      this.axios
        .post(url.doctor_code, {
          token: this.token
        })
        .then(res => {
          if (res.data.code === 0) {
            this.doctorCode = res.data.groupCode
            this.doctorName = res.data.doctorName
            this.userName = res.data.userName
            this.flag = res.data.flag
          } else {
            this.$toast(res.data.msg)
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.wechatCode{
  padding: .6rem;
  box-sizing: border-box;
}
img{
	width: 10rem;
	height: auto;
	display: block;
	margin: 20px auto;
}
h1,h2,h3,li{
  width: 100%;
  padding: 0 .4rem;
  font-size: .28rem;
  color: #252525;
  line-height: .9rem;
  box-sizing: border-box;
}
h1{
  color: red;
}
h3{
  text-align: right;
}
</style>