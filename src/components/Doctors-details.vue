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
          v-html="item.content"
        ></van-tab>
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
          content: "<h2 style='font-family:宋体, Arial, Helvetica;font-weight:500;color:#333333;font-size:22px;background-color:#FFFFFF;'>在这里，我先为你科普一些肺部的基本保养方法：</h2><h3 style='font-family:宋体, Arial, Helvetica;font-weight:500;color:#333333;font-size:20px;background-color:#FFFFFF;'>    1、肺部保养之呼吸方法</h3><p style='text-indent:2em;color:#333333;font-family:宋体, Arial, Helvetica;font-size:16px;background-color:#FFFFFF;'>   肺主气,司呼吸。清气和浊气在肺内进行交换,吸入气体质量对肺的功能有很大影响。要想使您的肺保持清灵,首先要戒烟,并避免二手烟的危害,不要在空气污浊的地方长期逗留。有条件的朋友,可以经常到草木茂盛、空气新鲜的地方,做做运动,做做深呼吸,并通过着意的深长呼气,将体内的浊气排出。</p><p style='text-indent:2em;color:#333333;font-family:宋体, Arial, Helvetica;font-size:16px;background-color:#FFFFFF;'><img src='https://img.ys137.com/data/upload/ueditor/20161204/5843bbfd80c3a.jpg' title='肺怎么进行保养' alt='肺怎么进行保养' /></p><h3 style='font-family:宋体, Arial, Helvetica;font-weight:500;color:#333333;font-size:20px;background-color:#FFFFFF;'>2、肺部保养之饮水方法 </h3><p style='text-indent:2em;color:#333333;font-family:宋体, Arial, Helvetica;font-size:16px;background-color:#FFFFFF;'>    肺是一个开放的系统,从鼻腔到气管再到肺,构成了气的通路。肺部的水分可以随着气的排出而散失。干燥的空气更容易带走水分,造成肺黏膜和呼吸道的损伤。这就是中医所说的,燥邪容易伤肺。因此,及时补充水分是肺保养的重要措施。</p><h3 style='font-family:宋体, Arial, Helvetica;font-weight:500;color:#333333;font-size:20px;background-color:#FFFFFF;'>    3、肺部保养之情绪调节</h3><p style='text-indent:2em;color:#333333;font-family:宋体, Arial, Helvetica;font-size:16px;background-color:#FFFFFF;'>    肺在志为悲忧,悲伤忧愁的情绪容易损伤肺,肺病的人也容易悲伤忧愁。而笑为心声,能克肺金的悲忧。多笑一笑,就能减少悲伤忧愁。笑也是一种健身运动,它能使胸廓扩张,肺活量增大,胸肌伸展。这样有助于宣发肺气,有利于人体气机的升降。每日笑一笑,能够消除疲劳,解除抑郁,宽胸理气,恢复体力,增进食欲。</p><p style='text-indent:2em;color:#333333;font-family:宋体, Arial, Helvetica;font-size:16px;background-color:#FFFFFF;'>    <img src='https://img.ys137.com/data/upload/ueditor/20161204/5843bc0628f37.jpg' title='肺怎么进行保养' alt='肺怎么进行保养' /></p><h3 style='font-family:宋体, Arial, Helvetica;font-weight:500;color:#333333;font-size:20px;background-color:#FFFFFF;'>    4、肺部保养之饮食方法</h3><p style='text-indent:2em;color:#333333;font-family:宋体, Arial, Helvetica;font-size:16px;background-color:#FFFFFF;'>    适当进行相关食疗保养。对于饮食,多吃蔬菜水果,补充各种维生素,是非常重要的,因为随着经济条件的提高,生活水平的改善,人们都是鱼肉天天有,减少了蔬菜水果的摄入。另外定期自己制定养肺食谱,有很多,可以多去学习学习。我吃过和所了解的有莲子百合瘦肉、冰糖蒸梨、川贝雪梨猪肺等都是养肺的好食谱,如果你喜爱厨艺的话,可以好好去研究一下。</p><h3 style='font-family:宋体, Arial, Helvetica;font-weight:500;color:#333333;font-size:20px;background-color:#FFFFFF;'>    5、肺部保养之锻炼方法</h3><p style='text-indent:2em;color:#333333;font-family:宋体, Arial, Helvetica;font-size:16px;background-color:#FFFFFF;'>    早晨多锻炼身体,呼吸新鲜空气,清理肺部。早晨的空气经过夜晚的沉静,变得相当的洁净清新,因此,多呼吸清晨的空气,早晨散散步或是锻炼锻炼身体,不但养肺,而且增加身体体质与抵抗力。</p>"
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