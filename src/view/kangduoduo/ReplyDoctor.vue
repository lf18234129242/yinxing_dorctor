<template>
  <div class="ReplyDoctor">
    <div class="illness_desc">
      <h2>{{sick_person_name}}<span>{{create_time}}</span></h2>
      <p>{{sick_desc}}</p>
			<div v-if="imgArr">
				<img 
					v-for="(item, index) in imgArr" 
					:key="index"
					:src="item"
					alt=""
					lazy-load
					@click="previewImage(index, imgArr)"
				>
			</div>
    </div>
    <div class="illness_desc">
      <h2>医生回复<span v-if="has_reply">{{reply_create_time}}</span></h2>
      <p v-if="has_reply">{{reply_desc}}</p>
      <textarea v-if="!has_reply || reply_again" id="" cols="30" rows="10" v-model="doctor_reply"></textarea>
    </div>

		<van-button round class="put_question_again" @click="submit" :disabled="replyBtnSub">{{reply_btn_text}}</van-button>
		<footer>
			<h3>温馨提示</h3>
			<li>1.提交详细信息，医生可以给更准确的回复</li>
			<li>2.该服务是医生利用空闲时间进行的免费帮忙</li>
			<li>3.本服务为免费帮忙，内容仅供参考，如具体病情请及时前往门诊就医。</li>
		</footer>
  </div>
</template>

<script>
import { Toast } from 'vant';
import { ImagePreview } from 'vant'
import { XSSReg } from "@/utils/count"
export default {
  name: 'ReplyDoctor',
  data() {
    return {
      sick_person_name: '病人名称',
      create_time: '2015-05-15 12:23:00',
      sick_desc: '病情描述病情描述病情描述',
      imgArr: [],
      has_reply: false,
      reply_btn_text: '回复',  // 补充回复
      token: '',
      reply_desc: '回复回复回复回复',
      reply_create_time: '2015-05-15 12:23:00',
      doctor_reply: '',
      replyBtnSub: false,
      reply_again: false,
    }
  },
  methods: {
    submit() {
      if (this.reply_again) {
        this.replayAgain()
      } else {
        this.submitReply()
      }
    },
    replayAgain() {
      this.reply_again = true
    },
    submitReply() {
      let doctor_reply = this.doctor_reply.trim().replace(XSSReg, '')
      console.log(doctor_reply)
      if (doctor_reply === '') {
        this.$toast("请输入您的回复内容");
        return false;
      }
      // this.replyBtnSub = true
      
    }
  },
}
</script>

<style lang="scss" scoped>

.ReplyDoctor{
	background: #F2F2F2;
	width: 100%;
	min-height: 100vh;
	padding-bottom: .6rem;
	.illness_desc{
		padding: .6rem;
		box-sizing: border-box;
		background: #fff;
		border-bottom: .4rem solid #F2F2F2;
    textarea{
      width: 100%;
      height: 7rem;
      resize: none;
      box-sizing: border-box;
      padding: .2rem;
      line-height: .8rem;
      border-radius: .1rem;
    }
		h2{
			font-size: .72rem;
			color: #010101;
			font-weight: 600;
			margin-bottom: .4rem;
			height: 1.32rem;
			line-height: 1.32rem;
			span{
        padding-left: 10px;
				font-size: .5rem;
				color: #666;
			}
		}
		p{
			font-size: .6rem;
			color: #333;
			line-height: .96rem;
			margin-bottom: .4rem;
		}
		img{
			width: 4rem;
			height: 4rem;
			margin: 0 .6rem .6rem 0;
		}
	}
	.put_question_again{
		width:8.4rem;
		height:1.76rem;
		background:linear-gradient(90deg,rgba(0,181,140,1) 0%,rgba(0,104,82,1) 99%);
		box-shadow:0px .1rem .2rem 0px rgba(0,106,84,0.3);
		color: #fff;
		font-weight:600;
		border: none;
		margin: 1rem auto 1rem;
		display: block;
		span{
			font-size: .72rem;
		}
	}
	footer{
		padding: .6rem;
		box-sizing: border-box;
		font-size: .6rem;
		color: #666;
		line-height: .96rem;
		h3{
			font-size: .6rem;
			font-weight: 600;
		}
	}
}
</style>