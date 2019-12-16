<template>
  <div class="hello">
    <div class="search-box">
      <input class="search" type="text" v-model="search_data" placeholder="输入疾病名称或编码" />
    </div>

    <van-radio-group v-model="radio">
      <van-cell-group>
        <van-cell
          v-for="(item,index) in newRadioList"
          :key="index"
          :title="item.title"
          clickable
          @click="radio = item.id"
        >
          <van-radio slot="right-icon" :name="item.id" checked-color="#16A332" />
        </van-cell>
      </van-cell-group>
    </van-radio-group>

    <router-link :to="{path:'/RegisterPatient',query:{}}">
      <van-button type="primary" color="#16A332">下一步</van-button>
    </router-link>
  </div>
</template>

<script>
import url from './../apiconfig'
export default {
  name: "Register-chooseIll",
  data() {
    return {
      search_data: "", //搜索内容
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
      ],
      token: "",
      push_id: "",
    };
  },
  mounted() {
    // let href = window.location.href
    let href =
      "https://www.okginko.com/index.html?token=ouYrs1Y3ri3ke2Wyk-7Q7njCAE4o&push_id=2";
    let splitIndex = href.indexOf("?");
    let str = href.substring(splitIndex + 1);
    this.token = this.getStrParam(str, "token");
    this.push_id = this.getStrParam(str, "push_id");
    this.getIllList()
  },
  computed: {
    newRadioList() {
      var _this = this;
      var newRadioList = [];
      _this.radioList.map(item => {
        if (item.title.search(_this.search_data) != -1) {
          newRadioList.push(item);
        }
      });
      return newRadioList;
    }
  },
  methods: {
    getStrParam(str, name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = str.match(reg);
      if (r != null) return r[2];
      return "";
    },
    getIllList() {
      this.axios.post(url.ill_list,{
        token:this.token
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    // getClientInfo() {
    //   let openid = localStorage.getItem("openid");
    //   this.axios
    //     .post(url.getClientInfo, {
    //       access_token: this.access_token,
    //       openid: openid
    //     })
    //     .then(res => {
    //       console.log(res);
    //       this.car_owner = res.data.data.username;
    //       localStorage.setItem("id", res.data.data.id);
    //       localStorage.setItem("wx_headimgurl", res.data.data.wx_headimgurl);
    //       localStorage.setItem("username", res.data.data.username);
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  width: 100%;
  position: absolute;
}
.search-box {
  width: 15rem;
  height: 2rem;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
  .search {
    width: 11rem;
    height: 1.36rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 0.68rem;
    border: none;
    text-align: center;
    line-height: 1.36rem;
    font-size: 0.44rem;
    font-weight: 400;
  }
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
</style>
