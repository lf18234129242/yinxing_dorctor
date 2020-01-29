<template>
  <div class="Doctors-order">
    <div class="title_box">
      <p class="warn">{{doctorOrderList[0].text1}}</p>
      <img class="doctor" :src="doctorOrderList[0].avatar_url" alt />
    </div>
    <section>
      <div class="score_box">
        <img class="step" src="@/assets/img/step.png" alt="">
        <p>健康进度 {{ill_score}}%</p>
        <img 
          v-for="(item, index) in firstCount" 
          :key="index" 
          :style="{left: (2.5 + item * 0.5) + 'rem'}"
          src="@/assets/img/step-green-2.png"
          class="green_2"
        >
        <img 
          v-for="(item, index) in secondCount" 
          :key="index" 
          src="@/assets/img/step-green-1.png" 
          class="green_1"
          :style="{left: (secondScore + item * 0.5) + 'rem'}"
        >
      </div>
      <div class="zindex_0" v-if="pushType !== 4">
        <div v-for="(item, index) in doctorOrderList" :key="index">
          <div v-html="item.content"></div>
        </div>
      </div>
      <div class="zindex_0" v-else>
        <div v-html="doctorOrderList[0].content1"></div>
        <a target="_blank" :href="doctorOrderList[0].content1_link">
          <img class="detail_img" src="@/assets/img/detail-1.png" alt="">
        </a>
        <div v-html="doctorOrderList[0].content2"></div>
        <a target="_blank" :href="doctorOrderList[0].content2_link">
          <img class="detail_img" src="@/assets/img/detail-2.png" alt="">
        </a>
        <div v-html="doctorOrderList[0].content3"></div>
        <a target="_blank" :href="doctorOrderList[0].content3_link">
          <img class="detail_img" src="@/assets/img/detail-3.png" alt="">
        </a>
        <div v-html="doctorOrderList[0].content4"></div>
        <a target="_blank" :href="doctorOrderList[0].content4_link">
          <img class="detail_img" src="@/assets/img/detail-4.png" alt="">
        </a>
      </div>
    </section>
    <footer>
      <img src="@/assets/img/bottom.png" class="bottom" alt />
      <p>如果觉得情况不符合，可以进行调整或给我留言</p>
      <img class="signature_url" v-if="doctorOrderList[0].signature_url" :src="doctorOrderList[0].signature_url" alt="">
      <p v-else class="doctor_name">{{doctorOrderList[0].doctorName}}</p>
    </footer>
  </div>
</template>
<script>
import url from "./../apiconfig";
import { count, getStrParam, queryUserInfo, showHtml } from "./../count";
import echarts from "echarts";
export default {
  name: 'DoctorsOrder',
  data() {
    return {
      doctorOrderList: [],
      pushType: '',
      push_id: '',
      token: '',
      ill_score: 0,
      firstCount: 0,
      secondCount: 0,
      secondScore: 0,
    };
  },
  mounted() {
    // let href = window.location.href
    let href =
      "https://www.okginko.com/index.html?token=ouYrs1Y3ri3ke2Wyk-7Q7njCAE4o&push_id=48&type=1";
    this.token = getStrParam(href, "token");
    this.push_id = getStrParam(href, "push_id");
    this.type = getStrParam(href, "type");
    count(this.push_id, this.token);
    sessionStorage.setItem("token", this.token);
    this.getDoctorOrder()
    this.computeScore()
  },
  methods: {
    computeScore() {
      let count = 18
      this.firstCount = Math.round(count * this.ill_score / 100)
      this.secondCount = count - this.firstCount
      this.secondScore = this.firstCount * 0.5 + 2.5
    },
    getDoctorOrder () {
      this.axios
        .post(url.doctorsOrder, {
          token: this.token,
          type: this.type,
          pushId: this.push_id
        })
        .then(res => {
          console.log('getDoctorOrder', res)
          if (res.data.code === 0) {
            let item = res.data.data[0]
            this.ill_score = item.illness_score
            this.doctorOrderList = JSON.parse(showHtml(JSON.stringify(res.data.data)))
            this.pushType = res.data.pushType
            console.log(this.doctorOrderList)
          }
        })
        .catch(err => {});
    }
  }
};
</script>

<style lang="scss" scoped>
.Doctors-order {
  width: 100%;
  min-height: 100vh;
  padding: 0.8rem 0.6rem;
  box-sizing: border-box;
  background: linear-gradient(#35af4d, #16a332);
  position: relative;
  z-index: 0;
  overflow: hidden;
  &::before {
    width: 17rem;
    height: 17rem;
    background: linear-gradient(
      0deg,
      rgba(22, 163, 50, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    border-radius: 50%;
    content: "";
    position: absolute;
    left: -7.82rem;
    top: -12rem;
    z-index: -1;
  }
  &::after {
    width: 12.9rem;
    height: 12.9rem;
    background: linear-gradient(
      0deg,
      rgba(22, 163, 50, 1) 0%,
      rgba(255, 255, 255, 0) 100%
    );
    border-radius: 50%;
    content: "";
    position: absolute;
    right: -5.18rem;
    top: 1rem;
    z-index: -1;
  }
  .title_box {
    width: 100%;
    height: 3.88rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 0.6rem;
    box-sizing: border-box;
    .warn {
      font-size: 0.48rem;
      color: #e1fce7;
      width: 8rem;
      font-weight: 400;
      line-height: 0.8rem;
    }
    .doctor {
      width: 3.88rem;
      height: 3.88rem;
    }
  }
  section {
    width: 100%;
    min-height: 75vh;
    background: #fff;
    border-radius: 0.4rem;
    margin-top: 0.8rem;
    padding: 0.8rem 0.8rem 7.5rem;
    box-sizing: border-box;
    .zindex_0{
      z-index: 2;
    }
    .detail_img{
      width: 12.2rem;
      height: 4rem;
      border-radius: .2rem;
      display: block;
      margin: .6rem 0;
    }
    .score_box{
      width: 12.6rem;
      height: 2.52rem;
      margin-bottom: .74rem;
      position: relative;
      .step{
        width: 100%;
        height: 100%;
      }
      p{
        font-size: .6rem;
        color: #1FA63A;
        font-weight: bold;
        position: absolute;
        left: 3.64rem;
        top: .2rem;
      }
      .green_1,.green_2{
        width: .78rem;
        height: .84rem;
        position: absolute;
        top: 1.16rem;
      }
    }
    .warn_title{
      width:13.8rem;
      height:1.76rem;
      background:rgba(236,245,238,1);
      margin-left: -0.8rem;
      padding: 0 .6rem 0 .8rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      justify-content: space-between;
      p{
        color: #010101;
        font-size: .6rem;
      }
      h3{
        color: #16A332;
        font-size: .6rem;
        cursor: pointer;
      }
    }
    .content{
      font-size: .6rem;
      line-height: .96rem;
      font-weight: 400;
      margin-top: 1rem;
    }
    .a_href{
      font-size: .6rem;
      color: #16A332;
      line-height: .96rem;
      font-weight: 400;
      text-decoration: underline;
    }
  }
  footer {
    width: 100%;
    height: 6.68rem;
    position: fixed;
    left: 0;
    bottom: 0;
    padding: 2.4rem 1.2rem 0;
    box-sizing: border-box;
    .bottom {
      width: 15rem;
      height: 6.68rem;
      position: absolute;
      left: 0;
      top: 0.6rem;
      z-index: 2;
    }
    .signature_url{
      width: 3.6rem;
      height: auto;
      z-index: 2;
      position: absolute;
      right: 0.5rem;
    }
    p {
      font-size: 0.6rem;
      color: #fefefe;
      width: 9.3rem;
      line-height: 0.96rem;
      z-index: 3;
      position: absolute;
      left: 1.2rem;
      top: 2.7rem;
    }
    .doctor_name {
      font-size: 0.6rem;
      color: #fefefe;
      text-align: right;
      width: 100%;
      z-index: 3;
      position: absolute;
      left: 0rem;
      top: 4.4rem;
      padding: 0 1.2rem;
      box-sizing: border-box;
    }
  }
}
</style>