<template>
  <div class="QuestionList pr">
		<div class="no_data">
			<img src="@/assets/img/duoduo/no_record_data.png" alt="">
			<p>您尚未提交问题</p>
		</div>
		<van-button class="put_question" @click="putQuestion">立即提问</van-button>
	</div>
</template>

<script>
export default {
  name: "QuestionList",
  data() {
    return {
      key: "value"
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
}
</style>