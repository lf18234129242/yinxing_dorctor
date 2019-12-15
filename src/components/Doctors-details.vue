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
          :title="item.title"
        >{{ item.content }}</van-tab>
      </van-tabs>
    </section>
  </div>
</template>

<script>
export default {
  name: "doctorsDetails",
  data() {
    return {
      active: 0,
      vanTabs: [
        {
          title: "疾病原理",
          content: "缺血性视神经病变为供应视神经的动脉血供急性障碍引起视神经缺血、缺氧，造成视神经的损害，分为前部缺血性视神经病变和后部缺血性病变，单眼或双眼发病，双眼发病时间可有间隔。目前临床上将其统称为前部缺血性视神经病变。多见于老年人，超过60岁，女较男多见。"
        },
        {
          title: "一般治疗措施",
          content: "缺血性视神经病变为供应视神经的动脉血供急性障碍引起视神经缺血、缺氧，造成视神经的损害，分为前部缺血性视神经病变和后部缺血性病变，单眼或双眼发病，双眼发病时间可有间隔。目前临床上将其统称为前部缺血性视神经病变。多见于老年人，超过60岁，女较男多见。"
        },
        {
          title: "预后",
          content: "缺血性视神经病变为供应视神经的动脉血供急性障碍引起视神经缺血、缺氧，造成视神经的损害，分为前部缺血性视神经病变和后部缺血性病变，单眼或双眼发病，双眼发病时间可有间隔。目前临床上将其统称为前部缺血性视神经病变。多见于老年人，超过60岁，女较男多见。"
        },
        {
          title: "康复",
          content: "缺血性视神经病变为供应视神经的动脉血供急性障碍引起视神经缺血、缺氧，造成视神经的损害，分为前部缺血性视神经病变和后部缺血性病变，单眼或双眼发病，双眼发病时间可有间隔。目前临床上将其统称为前部缺血性视神经病变。多见于老年人，超过60岁，女较男多见。"
        },
      ]
    };
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
    min-width: none;
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