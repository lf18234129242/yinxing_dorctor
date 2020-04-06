<template>
  <div class="QuestionList pr">
		<div class="no_data" v-if="questionList.length === 0">
			<img src="@/assets/img/duoduo/no_record_data.png" alt="">
			<p>您尚未提交问题</p>
		</div>
		<template v-else>
			<div 
				class="question_list"
				v-for="(item,index) in questionList"
				:key="index"
			>
				<router-link to="/Chating">
					<div class="question">
						<span :class="['question_status', item.call_back_status === 1 ? 'yes' : 'no']">{{item.call_back_status === 1 ? '已回复' : '未回复'}}</span>
						{{item.question}}
					</div>
					<div class="question_imgs">
						<img 
							v-for="(jtem, idx) in item.imgs" 
							:key="idx" 
							:src="jtem" 
							alt=""
						>
					</div>
				</router-link>
			</div>
		</template>
		<van-button class="put_question" @click="putQuestion">立即提问</van-button>
	</div>
</template>

<script>
export default {
  name: "QuestionList",
  data() {
    return {
      questionList: [
				{
					call_back_status: 1,
					question: '患者女，百度20岁，近日在遇寒冷天气，寒风，冷水后双上肢，双腿出现麻疹风团患者女，百度20岁，近日在遇寒冷天气，寒风，冷水后双上肢，双腿出现麻疹风团',
					imgs: [
						'https://image.doulaoban.com/applet/car_icon.png',
						'https://image.doulaoban.com/applet/doubi_mall.png',
						'https://image.doulaoban.com/applet/car_icon.png'
					],
					url: ''
				},
				{
					call_back_status: 2,
					question: '麻疹风团患百冷水后双肢，双腿出现麻疹度20者女，岁，近日在遇寒冷天气，寒风，上肢，双腿出现患者女，百度20岁，近日在遇寒冷天气，寒风，冷水后双上风团',
					imgs: [
						'https://image.doulaoban.com/applet/doubi_mall.png',
						'https://image.doulaoban.com/applet/car_icon.png',
						'https://image.doulaoban.com/applet/doubi_mall.png',
					],
					url: ''
				},
			]
    };
	},
	methods: {
		putQuestion() {
			console.log('putQuestion')
		}
	},
};
</script>

<style lang="scss" scoped>
.QuestionList{
	width: 100%;
	height: 100vh;
	background: #F2F2F2;
	.no_data{
		width: 100%;
		height: 10rem;
		display: flex;
		align-items: center;
		flex-direction: column;
		padding-top: 6rem;
		img{
			width: 2.44rem;
			height: 3.16rem;
			margin: 0 0 1.2rem 0;
		}
		p{
			color: #999;
			font-size: .6rem;
		}
	}
	.put_question{
		width:15rem;
		height:1.96rem;
		background:linear-gradient(90deg,rgba(0,181,140,1) 0%,rgba(0,104,82,1) 99%);
		box-shadow:0px 0.1rem .2rem 0px rgba(0,106,84,0.3);
		color: #fff;
		font-weight:600;
		border: none;
		position: fixed;
		left: 0;
		bottom: 0;
		span{
			font-size: .72rem;
		}
	}
	.question_list{
		width: 100%;
		height: 6.7rem;
		background: #fff;
		padding: .6rem;
		box-sizing: border-box;
		margin-bottom: .4rem;
		.question{
			font-size: .6rem;
			color: #333333;
			line-height: .96rem;
			overflow: hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			overflow:hidden;
			/*! autoprefixer: off */
			-webkit-box-orient: vertical;
			margin-bottom: .4rem;
			.question_status{
				width:2rem;
				height:.84rem;
				border-radius:.4rem;
				color: #fff;
				font-size: .48rem;
				line-height: .84rem;
				text-align: center;
				display: inline-block;
			}
			.yes{
				background:linear-gradient(90deg,rgba(0,181,140,1) 0%,rgba(0,104,82,1) 99%);
			}
			.no{
				background: #BFBFBF;
			}
		}
		.question_imgs{
			display: flex;
			img{
				width: 3.2rem;
				height: 3.2rem;
				display: inline-block;
				margin-right: .4rem;
			}
		}
	}
}
</style>