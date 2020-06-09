<template>
  <div class="wechatCode">
    <h1 v-if="flag == '1'">您的信息已经提交。</h1>
    <h2>{{userName}}，请加入我的交流群，长按下方二维码，然后加入群聊。入群后可免费提问。</h2>
    <h3>————{{doctorName}}医生</h3>
    <img :src="doctorCode" />
    <li>1. 长按中间的二维码</li>
    <li>2. 前往图中的群聊</li>
  </div>
</template>

<script>
import { yinxing } from "@/utils/http"
import { getStrParam, count } from "@/utils/count"
export default {
  data() {
    return {
      doctorCode: "",
      token: "",
      push_id: "",
      doctorName: '',
      userName: '',
      flag: '',
      type: ''
    };
  },
  mounted() {
    let token = sessionStorage.getItem("token");
    let push_id = sessionStorage.getItem("push_id");
    this.token = token;
    this.push_id = push_id;
    if (!token || !this.doctorId || !this.type) {
      let href = window.location.href
      // let href = "https://www.okginko.com/index.html#/WechatCode?token=ouYrs1YZ2D4DVAbxbmBCgjMUv72Y&push_id=2031&doctor_id=6&type=1";
      this.token = getStrParam(href, "token");
      this.push_id = getStrParam(href, "push_id");
      this.doctorId = getStrParam(href, "doctor_id");
      this.type = getStrParam(href, "type");
      count(this.push_id, this.token);
      sessionStorage.setItem("token", this.token);
      sessionStorage.setItem("push_id", this.push_id);
    }
    this.getCode();
  },
  methods: {
    getCode() {
      yinxing.getDoctorCode({
        token: this.token,
        doctorId: this.doctorId,
        type: this.type
      }).then(res => {
        if (res.data.code === 0) {
          this.doctorCode = res.data.groupCode
          this.doctorName = res.data.doctorName
          this.userName = res.data.userName
          this.flag = res.data.flag
        }
      })
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
  font-size: .8rem;
  color: #252525;
  line-height: 1.4rem;
  box-sizing: border-box;
}
h1{
  font-weight: bold;
}
h3{
  text-align: right;
}
li{
  font-size: 1rem;
  line-height: 1.4rem;
}
</style>