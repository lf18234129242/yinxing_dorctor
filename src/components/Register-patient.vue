<template>
  <div class="patient-box">
    <h1>请输入患者信息</h1>
    <div class="cell-box">
      <p>姓名</p>
      <input type="text" v-model="username" placeholder="请输入您的姓名" />
    </div>
    <div class="cell-box select-arrow" @click="selectSex">
      <p>性别</p>
      <input type="text" v-model="usersex" placeholder="点击选择" />
    </div>
    <div class="cell-box select-arrow" @click="selectAge">
      <p>年龄</p>
      <input type="text" v-model="userage" placeholder="点击选择" />
    </div>

    <!-- 选择性别弹出框 -->
    <van-popup v-model="show_sex" round position="bottom">
      <ul @click="chooseSex">
        <li class="nan" :data-index="1">男</li>
        <li class="nv" :data-index="2">女</li>
        <li class="cancel" :data-index="3">取消</li>
      </ul>
    </van-popup>
    <!-- 选择年龄弹出框 -->
    <van-popup v-model="show_age" round position="bottom">
      <van-picker
        show-toolbar
        title="选择年龄"
        :columns="age_columns"
        :default-index="30"
        @cancel="onCancel_age"
        @confirm="onConfirm_age"
      />
    </van-popup>

    <van-button type="primary" color="#16A332" @click="next">下一步</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      usersex: "",
      userage: "",
      show_sex: false,
      show_age: false,
      sex_columns: ["男", "女"],
      age_columns: []
    };
  },
  methods: {
    // 下一步
    next(){
      if(this.username == ''){
        this.$toast('请输入您的姓名')
        return false;
      }
      if(this.usersex == ''){
        this.$toast('请选择您的性别')
        return false;
      }
      if(this.userage == ''){
        this.$toast('请选择您的年龄')
        return false;
      }
      this.$router.push({
        path:'/RegisterBindPhoneNum',
        query:{}
      })
    },
    selectSex() {
      this.show_sex = true;
    },
    chooseSex(event) {
      switch (event.target.innerHTML) {
        case "男":
          this.usersex = "男";
          this.show_sex = false;
          break;
        case "女":
          this.usersex = "女";
          this.show_sex = false;
          break;
        case "取消":
          this.show_sex = false;
          break;
      }
    },
    selectAge() {
      for (let i = 0; i < 121; i++) {
        this.age_columns.push(i);
      }
      this.show_age = true;
    },
    onConfirm_age(value, index) {
      this.userage = value;
      this.show_age = false;
    },
    onCancel_age() {
      this.show_age = false;
    }
  }
};
</script>

<style lang="scss" scoped>
.patient-box {
  width: 100%;
  position: absolute;
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
  .select-arrow {
    position: relative;
  }
  .select-arrow::before {
    content: "";
    width: 0.4rem;
    height: 0.4rem;
    background: #acacac;
    position: absolute;
    right: 1.8rem;
    top: 1.56rem;
    transform: rotate(45deg);
  }
  .select-arrow::after {
    content: "";
    width: 0.4rem;
    height: 0.4rem;
    background: #fff;
    position: absolute;
    right: 1.84rem;
    top: 1.56rem;
    transform: rotate(45deg);
  }
  .nan,
  .nv,
  .cancel {
    width: 100%;
    height: 1.76rem;
    text-align: center;
    line-height: 1.76rem;
    font-size: 0.6rem;
  }
  .nan,
  .nv {
    color: #666;
    position: relative;
  }
  .nan::after {
    content: "";
    width: 13.8rem;
    height: 1px;
    background: #f2f2f2;
    position: absolute;
    left: 0.6rem;
    bottom: 0;
  }
  .cancel {
    color: #bbb;
    border-top: 1px solid #000;
  }
  .van-picker__cancel,
  .van-picker__confirm {
    color: #16a332 !important;
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