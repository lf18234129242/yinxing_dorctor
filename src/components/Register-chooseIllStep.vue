<template>
  <div class="Register-chooseIllStep">
    <h1>请选择病程</h1>
    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell
          v-for="(item,index) in radioList"
          :key="index"
          :title="item.title"
          clickable
          @click="radio = item.id"
        >
          <van-radio slot="right-icon" :name="item.id" checked-color="#16A332" />
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    
    <router-link :to="{path:'/RegisterSubmitPicture',query:{}}">
      <van-button type="primary" color="#16A332">下一步</van-button>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: 1,
      radioList: [
        {
          title: "11关节炎",
          id: 1
        },
        {
          title: "22痛风",
          id: 2
        },
        {
          title: "33风湿性关节炎",
          id: 3
        },
        {
          title: "44骨质疏松",
          id: 4
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.Register-chooseIllStep {
  width: 100%;
  position: absolute;
  h1 {
    font-size: 0.96rem;
    color: #333;
    font-weight: 600;
    padding-left: 0.6rem;
    box-sizing: border-box;
    margin: 2.18rem 0 1.18rem;
  }
  .van-cell {
    height: 1.76rem;
    font-size: 0.6rem !important;
    color: #333;
    display: flex;
    align-items: center;
  }
  .van-button {
    width: 100%;
    height: 1.76rem;
    position: fixed;
    bottom: 0;
    left: 0;
    font-size: 0.56rem;
    color: #fff;
  }
}
</style>