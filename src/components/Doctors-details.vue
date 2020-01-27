<template>
  <div class="doctorsDetails">
    <header>
      <h1>
        缺血性
        <br />视神经病变
      </h1>
      <img src="./../assets/img/detail.png" alt />
    </header>
    <section>
      <van-tabs v-model="active" animated>
        <van-tab
          v-for="(item, index) in vanTabs"
          :key="index"
          :title="item.module_name"
          v-html="item.content"
        >
        </van-tab>
      </van-tabs>
    </section>
  </div>
</template>

<script>
import url from "./../apiconfig";
import { count, getStrParam, queryUserInfo } from "./../count";
export default {
  name: "doctorsDetails",
  data() {
    return {
      active: 0,
      vanTabs: [],
      token: '',
    };
  },
  mounted() {
    // let href = window.location.href
    let href = "https://www.okginko.com/index.html?token=ouYrs1Y3ri3ke2Wyk-7Q7njCAE4o&push_id=2";
    this.token = getStrParam(href, "token");
    this.push_id = getStrParam(href, "push_id");
    this.getTheoryInfo();
    // count(this.push_id, this.token);
    sessionStorage.setItem("token", this.token);
    // queryUserInfo(this.token, 2, "/RegisterPatient");
  },
  methods: {
    showHtml(str) {
      return str
      .replace(str ? /&(?!#?\w+;)/g : /&/g, '&amp;')
      .replace(/&amp;nbsp;/g,"")
      .replace(/&lt;/g,"<")
      .replace(/&gt;/g,">")
      .replace(/&quot;/g,"\"")
      .replace(/&#39;/g, "\'")
    },
    getTheoryInfo() {
      this.axios
        .post(url.theoryInfo, {
          token: this.token,
          illnessId: 2
        })
        .then(res => {
          console.log('getTheoryInfo', res)
          if (res.data.code === 0) {
            // this.radioList = res.data.data;
            // this.vanTabs = res.data.data
            this.vanTabs = JSON.parse(this.showHtml(JSON.stringify(res.data.data)))
            // this.vanTabs.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
            console.log(this.vanTabs)
          }
        })
        .catch(err => {});
    }
  }
};
</script>

<style lang="scss">
header {
  margin: 0.6rem;
  width: 13.8rem;
  height: 4.9rem;
  background: #16a332;
  position: relative;
  z-index: -2;
  overflow: hidden;
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0.6rem;
  box-sizing: border-box;
  &::before {
    content: "";
    width: 14rem;
    height: 14rem;
    background: linear-gradient(
      0deg,
      rgb(67, 185, 91) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    border-radius: 50%;
    position: absolute;
    left: -7rem;
    top: -10rem;
    z-index: -1;
  }
  &::after {
    content: "";
    width: 14rem;
    height: 14rem;
    background: linear-gradient(
      0deg,
      rgb(109, 204, 128) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    border-radius: 50%;
    position: absolute;
    right: -7rem;
    bottom: -10rem;
    z-index: -1;
  }
  h1 {
    font-size: 1.2rem;
    color: #dbfbe1;
    line-height: 1.6rem;
    font-weight: 600;
  }
  img {
    width: 3.3rem;
    height: 3.3rem;
  }
}
section{
  .van-tab--active{
    font-weight: 600;
    color: #000;
  }
  .van-tabs__line{
    background: #67C379;
    border-radius: 0;
    bottom: 1rem;
    height: .32rem;
  }
  .van-tab{
    z-index: 2;
    // min-width: none;
    padding: 0;
  }
  .van-tabs__content{
    width: 100%;
    min-height: 71vh;
    background: #F5F5F5;
  }
  .van-tab__pane{
    margin: .8rem;
    width: 13.4rem;
  }
}
</style>