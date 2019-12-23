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
import url from "./../apiconfig";
import { Toast } from 'vant';
import { count, getStrParam, queryUserInfo } from "./../count";
export default {
  data() {
    return {
      textarea: "",
      fileList: [],
      uploadBase64_url:
        "https://admin.okginko.com/ginkgo-admin/sys/oss/uploadBase64",
      fileArr: [],
      token: ""
    };
  },
  mounted() {
    this.fileArr = [];
    let token = sessionStorage.getItem("token");
    this.token = token;
    if (!token || token == undefined) {
      // let href = window.location.href
      let href =
        "https://www.okginko.com/index.html?token=ouYrs1Y3ri3ke2Wyk-7Q7njCAE4o&push_id=2";
      this.token = getStrParam(href, "token");
      this.push_id = getStrParam(href, "push_id");
      count(this.push_id, this.token);
      sessionStorage.setItem("token", this.token);
    }
  },
  methods: {
    next() {
      let fileStr = this.fileArr.join(",");
      if (this.textarea) {
        this.axios
          .post(url.datum_save, {
            content: this.textarea,
            imgUrl: fileStr,
            token: this.token
          })
          .then(res => {
            console.log(res);
            if (res.data.code === 0) {
              this.fileArr = [];
              this.textarea = "";
            }
          });
      } else {
        this.$toast("请输入患者病情资料或上传报告单");
      }
    },
    // 上传图片
    afterRead(file) {
      // this.$toast.loading("正在上传中...");
      Toast.loading({
        message:'正在上传中...',
        duration:0,
        forbidClick: true
      })
      this.axios
        .post(this.uploadBase64_url, {
          base64: file.content
        })
        .then(res => {
          this.$toast.success("上传成功");
          if (res.data.code === 0) {
            this.fileArr.push(res.data.url);
          }
        });
    },
    // 返回布尔值
    beforeRead(file) {
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