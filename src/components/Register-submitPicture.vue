<template>
  <div class="RegisterSubmitPicture">
    <textarea v-model="textarea" cols="30" rows="10" placeholder="请输入患者病情资料或上传报告单" maxlength="300"></textarea>

    <van-uploader
      v-model="fileList"
      multiple
      :max-count="9"
      :before-read="beforeRead"
      :after-read="afterRead"
    />

    <van-button color="#16A332" round type="info" @click="next">下一步</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: "",
      fileList: []
    };
  },
  methods: {
    next() {},
    // 上传图片
    afterRead(file) {
      console.log(file);
    },
    // 返回布尔值
    beforeRead(file) {
      console.log(file);
      if (file.type == "image/jpeg" || file.type == "image/png") {
        return true;
      } else {
        this.$toast("请上传 jpg/png 格式图片");
        return false;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.RegisterSubmitPicture {
  width: 100%;
  position: absolute;
  padding: 0.6rem;
  box-sizing: border-box;
  textarea {
    width: 100%;
    height: 5rem;
    font-size: 0.56rem;
    color: #333;
    border: none;
    line-height: 0.96rem;
    resize: none;
  }
  .van-button {
    margin-top: 4.8rem;
    width: 11.8rem;
    height: 1.76rem;
    margin-left: 1rem;
  }
}
</style>