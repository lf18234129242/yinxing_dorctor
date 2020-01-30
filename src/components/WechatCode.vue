<template>
  <div>
    <img :src="doctorCode" />
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
          } else {
            this.$toast(res.data.msg)
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
img{
	width:10rem;
	height: 10rem;
	display: block;
	margin: 50px auto;
}
</style>