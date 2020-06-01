<template>
  <div class="UserManage">
    <div class="header">
      <div>门诊扫码用户：5</div>
      <div>裂变人数：17</div>
    </div>
    <div class="kong"></div>
    <div class="user_list_box">
      <div 
        class="user_item ripple"
        v-for="(item, index) in userList"
        :key="item.id"
        @click="handleDetail(item)"
      >
        <span class="index">{{index + 1}}</span>
        <img :src="item.avatar" alt="">
        <div>
          <div class="user_item_name">
            <span class="">{{item.nick_name}}</span>
            <span class="user_name">{{item.user_name}}</span>
          </div>
          <div class="user_item_info">
            <span class="">{{item.age}}岁</span>
            <span class="">{{item.gender}}</span>
            <span class="">{{item.phone}}</span>
          </div>
        </div>
      </div>
    </div>
    <nav>
      <div @click="handleLink">问题列表</div>
      <div>用户管理</div>
    </nav>
    <van-dialog
      v-model="showUserInfo"
      title=""
      className="user_info_dialog_box"
    >
      <div class="user_info_dialog">
        <div class="user_info_item">
          <span>微信昵称：</span>
          <span>{{userInfo.nick_name}}</span>
        </div>
        <div class="user_info_item">
          <span>姓名：</span>
          <span>{{userInfo.user_name}}</span>
        </div>
        <div class="user_info_item">
          <span>性别：</span>
          <span>{{userInfo.gender}}</span>
        </div>
        <div class="user_info_item">
          <span>年龄：</span>
          <span>{{userInfo.age}}</span>
        </div>
        <div class="user_info_item">
          <span>电话：</span>
          <span>{{userInfo.phone}}</span>
        </div>
        <div class="user_info_item">
          <span>疾病：</span>
          <span 
            @click="showIllnessPicker = true"
            class="ill_picker"  
          >
            {{userInfo.illness}}
            <van-icon name="arrow-down" />
          </span>
        </div>
        <div class="user_info_item">
          <span>病程：</span>
          <span 
            @click="showIllStepPicker = true"
            class="ill_picker"  
          >
            {{userInfo.illnessStep}}
            <van-icon name="arrow-down" />
          </span>
        </div>
        <div class="user_info_item">
          <span>备注：</span>
          <textarea cols="30" rows="10" v-model="user_mark"></textarea>
        </div>
      </div>
    </van-dialog>
    <!-- 疾病选择 -->
    <van-popup 
      v-model="showIllnessPicker" 
      round 
      position="bottom"
    >
      <van-picker
        show-toolbar
        :columns="illnessList"
        @cancel="showIllnessPicker = false"
        @confirm="onConfirmIllness"
      />
    </van-popup>
    <!-- 病程选择 -->
    <van-popup 
      v-model="showIllStepPicker" 
      round 
      position="bottom"
    >
      <van-picker
        show-toolbar
        :columns="illnessStepList"
        @cancel="showIllStepPicker = false"
        @confirm="onConfirmIllStep"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      token: 'value',
      userList: [
        {
          id: 1,
          avatar: 'https://image.doulaoban.com/applet/rpo_upgrade.png',
          nick_name: '云游四海走四方云游四海走四方',
          user_name: '周敏涛',
          age: 85,
          gender: '女',
          phone: '1823412319',
          illness: '暂无',
          illnessStep: '暂无',
        },
        {
          id: 2,
          avatar: 'https://image.doulaoban.com/applet/rpo_upgrade.png',
          nick_name: '云游四海走四方',
          user_name: '周敏涛',
          age: 85,
          gender: '女',
          phone: '1823412319',
          illness: '暂无',
          illnessStep: '暂无',
        }
      ],
      illnessList: [
        {
          value: 1,
          text: '脑膜炎'
        },
        {
          value: 2,
          text: '高血压'
        },
      ],
      illnessStepList: [
        {
          value: 1,
          text: '第一阶段'
        },
        {
          value: 2,
          text: '第二阶段'
        },
      ],
      showIllnessPicker: false,
      showIllStepPicker: false,
      showUserInfo: false,
      userInfo: {},
      user_mark: '',

    }
  },
  methods: {
    handleLink() {
      this.$router.push({
        path: '/ConsultList',
        query: {
          token: this.token
        }
      })
    },
    handleDetail(data) {
      this.userInfo = data
      this.showUserInfo = true
    },
    onConfirmIllness(data) {
      console.log(data)
      this.userInfo.illness = data.text
      this.showIllnessPicker = false
    },
    onConfirmIllStep(data) {
      console.log(data)
      this.userInfo.illnessStep = data.text
      this.showIllStepPicker = false
    },
  }
}
</script>

<style lang="scss" scoped>
.UserManage{
  width: 100%;
  height: 100vh;
  font-size: .6rem;
  .header{
    width: 100%;
    height: 2rem;
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    border-bottom: 1px solid #f5f5f5;
    box-shadow:0px 2px 10px 0px rgba(0,105,83,0.3);
    background: #fff;
    div{
      flex: 1;
      height: 100%;
      padding: 0 .6rem;
      box-sizing: border-box;
      line-height: 2rem;
      font-size: .6rem;
    }
  }
  .kong{
    width: 100%;
    height: 2rem;
  }
  .user_list_box{
    width: 100%;
    height: calc(100vh - 4rem);
    // margin: 2rem 0;
    background: #fff;
    .user_item{
      width: 100%;
      height: 3rem;
      padding: 0 .5rem;
      border-bottom: .02rem solid #f1f1f1;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      .index{
        font-size: .6rem;
      }
      img{
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        margin: 0 .5rem;
      }
      .user_item_name,.user_item_info{
        width: calc(100vw - 4rem);
        height: 1rem;
        display: flex;
        align-items: center;
        span{
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .user_name{
          padding-left: .3rem;
          box-sizing: border-box;
        }
      }
    }
  }
  nav{
    width: 100%;
    height: 2rem;
    display: flex;
    position: fixed;
    left: 0;
    bottom: 0;
    div{
      flex: 1;
      height: 100%;
      font-size: .8rem;
      display: flex;
      align-items: center;
      justify-content: center;
			background:linear-gradient(90deg,rgba(0,181,140,1) 0%,rgba(0,104,82,1) 99%);
			box-shadow:0px .1rem .2rem 0px rgba(0,106,84,0.3);
			color: #fff;
			font-weight:600;
    }
  }
  .user_info_dialog_box{
    width: 70vw;
    .user_info_dialog{
      width: 100%;
      padding: 1rem;
      box-sizing: border-box;
      .user_info_item{
        display: flex;
        width: 100%;
        min-height: 1rem;
        align-items: center;
        span:nth-child(1){
          flex: 1;
          height: 100%;
          text-align: right;
        }
        span:nth-child(2){
          flex: 2;
          height: 100%;
          box-sizing: border-box;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .ill_picker{
          display: flex;
          align-items: center;
          justify-content: space-between;
          // justify-content: flex-end;
          i{
            display: flex;
          }
        }
        textarea{
          flex: 2;
          height: 3rem;
          resize: none;
          padding: .4rem;
          box-sizing: border-box;
        }
      }
    }
  }
}
.ripple {
    position: relative;
    //隐藏溢出的径向渐变背景
    overflow: hidden;
}

.ripple:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    //设置径向渐变
    background-image: radial-gradient(circle, #666 10%, transparent 10.01%);
    background-repeat: no-repeat;
    background-position: 50%;
    transform: scale(10, 10);
    opacity: 0;
    transition: transform .3s, opacity .5s;
}

.ripple:active:after {
    transform: scale(0, 0);
    opacity: .3;
    //设置初始状态
    transition: 0s;
}
</style>