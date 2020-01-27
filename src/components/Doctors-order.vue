<template>
  <div class="Doctors-order">
    <div class="title_box">
      <p class="warn">{{doctor_warn}}</p>
      <img class="doctor" src="./../assets/img/doctor.png" alt />
    </div>
    <section>
      <div id="leidatu"></div>
      <div class="warn_title">
        <p>12月01日 您的健康指数偏低</p>
        <h3>点击提升 > </h3>
      </div>
      <p class="content">· 小结节是影像学的一种表现，小于6MM一般以随访，生活调理为主。</p>
      <p class="content">· 距离你上次体检已过去1年，研究表明，定期体检有助于减少大病晚期风险。</p>
      <p class="content">· 冬季进补：多吃这几类蔬果，有助于养肺</p>
      <a class="a_href" href="">瓜果蔬菜，秋梨膏></a>
      <p class="content">· 社保保险比例50%，已被97家保险公司除外保险，看看还有哪一种保险可以购买。</p>
      <a class="a_href" href="">你也可以点这里详细看看你的保险情况></a>
      <p class="content">· 多做这几种动作，有助于提高肺功能</p>                
      <a class="a_href" href="">有关疾病的详细原理，你可以点击这里></a>
    </section>
    <footer>
      <img src="./../assets/img/bottom.png" class="bottom" alt />
      <p>如果觉得情况不符合，可以进行调整或给我留言</p>
      <p class="doctor_name">胡洋</p>
    </footer>
  </div>
</template>
<script>
import url from "./../apiconfig";
import { count, getStrParam, queryUserInfo } from "./../count";
import echarts from "echarts";
export default {
  data() {
    return {
      doctor_warn:
        "张先生，离开我的诊室40天了根据临床数据，目前您的病情可以按照这个报告进行康复。"
    };
  },
  mounted() {
    this.$nextTick(function() {
      this.drawPie("main");
    });
    // let href = window.location.href
    let href = "https://www.okginko.com/index.html?token=ouYrs1YZ2D4DVAbxbmBCgjMUv72Y&push_id=2";
    this.token = getStrParam(href, "token");
    this.push_id = getStrParam(href, "push_id");
    this.getDoctorOrder();
    // count(this.push_id, this.token);
    sessionStorage.setItem("token", this.token);
    // queryUserInfo(this.token, 2, "/RegisterPatient");
  },
  methods: {
    drawPie() {
      var charts = echarts.init(document.getElementById("leidatu"));
      var option = {
        tooltip: {},
        title: { text: null }, // 隐藏图表标题
        radar: {
          shape: "circle",
          name: {
            textStyle: {
              color: "#333",
              padding: [-8, 5]
            }
          },
          indicator: [
            { name: "疾病治疗", max: 6500 },
            { name: "知识掌握", max: 16000 },
            { name: "大病筛查", max: 30000 },
            { name: "生活习惯", max: 38000 },
            { name: "经济预防", max: 52000 }
          ]
        },
        splitArea: {
          show: true,
          areaStyle: {
            color: ["#fff"] // 图表背景网格的颜色
          }
        },
        series: [
          {
            type: "radar",
            // areaStyle: {normal: {}},
            data: [
              {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                // 设置区域边框和区域的颜色
                itemStyle: {
                  normal: {
                    color: "#FF7676",
                    lineStyle: {
                      color: "#FF7676"
                    }
                  }
                },
                areaStyle: {
                  opacity: 0.75, // 图表中各个图区域的透明度
                  color: "#FF7676" // 图表中各个图区域的颜色
                }
              }
            ]
          }
        ]
      };
      charts.setOption(option);
    },
    getDoctorOrder () {
      this.axios
        .post(url.doctorsOrder, {
          token: this.token,
          type: 1,
          pushId: 46
        })
        .then(res => {
          console.log('getDoctorOrder', res)
          if (res.data.code === 0) {
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
  z-index: -2;
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
      width: 6.28rem;
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
    #leidatu {
      width: 100%;
      height: 6.4rem;
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
    p {
      font-size: 0.6rem;
      color: #fefefe;
      width: 9.56rem;
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