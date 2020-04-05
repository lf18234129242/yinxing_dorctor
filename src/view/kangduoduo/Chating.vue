<template>
  <div class="chating">
		<header class="illness_desc">
			<h2>病情描述</h2>
			<p>{{illnessDesc}}</p>
			<img 
				v-for="(item, index) in imgList" 
				:key="index" 
				:src="item" 
				alt=""
				lazy-load
				@click="previewImage(index)"
			>
		</header>
		<section class="answer">
			<h2>医生回答</h2>
			<p>{{answerText}}</p>
			<van-button round class="put_question_again" @click="putQuestionAgain">继续提问</van-button>
		</section>
		<footer>
			<h3>温馨提示</h3>
			<li>1.提交详细信息，医生可以给更准确的回复</li>
			<li>2.该服务是医生利用空闲时间进行的免费帮忙</li>
			<li>3.本服务为免费帮忙，内容仅供参考，如具体病情请及时前往门诊就医。</li>
		</footer>
	</div>
</template>

<script>
import { ImagePreview } from 'vant'
export default {
	name: 'chating',
  data() {
    return {
			illnessDesc: "患者女，百度20岁，近日在遇寒冷天气，寒风，冷水后双上肢，双腿出现麻疹风团，风团出发红，发痒，皮温热，解除寒冷环境后风团逐渐消失，无其他不适既往无过敏史，无家族史。",
			imgList: [
				'https://image.doulaoban.com/applet/car_icon.png',
				'https://image.doulaoban.com/applet/doubi_mall.png',
				'https://image.doulaoban.com/applet/car_icon.png',
				'https://image.doulaoban.com/applet/doubi_mall.png',
			],
			answerText: '病情分析：这个荨麻疹是跟过敏因素有关系的，如果不注意过敏源是会反复复发的。意见建议：可吃些消风止痒颗粒或氯雷他定来治疗，配合中成药防风通圣丸同用。避免食用一些刺激性食物，如葱、姜、蒜、浓茶、咖啡、酒类及其他容易引起过敏的食物，如鱼、虾等海味。'
    };
	},
	methods: {
		previewImage(num) {
			ImagePreview({
				images: this.imgList,
				startPosition: num
			})
		},
		putQuestionAgain() {
			console.log('putQuestionAgain')
		}
	},
};
</script>

<style lang="scss" scoped>
.chating{
	background: #F2F2F2;
	width: 100%;
	min-height: 100vh;
	padding-bottom: .6rem;
	.illness_desc, .answer{
		padding: .6rem;
		box-sizing: border-box;
		background: #fff;
		border-bottom: .4rem solid #F2F2F2;
		h2{
			font-size: .72rem;
			color: #010101;
			font-weight: 600;
			margin-bottom: .4rem;
			height: 1.32rem;
			line-height: 1.32rem;
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