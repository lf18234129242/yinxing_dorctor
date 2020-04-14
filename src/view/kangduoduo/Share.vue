<template>
	<div class="sharePage pr">
		<img src="@/assets/img/duoduo/leaf-bg.png" alt="" class="leaf">
		<div class="now_coin">
			<span>当前金币：{{total_integral}}</span>
		</div>
		<div class="text_content">
			<h3>消耗{{ONCECOST}}个金币，请医生帮忙</h3>
			<h2>转发赚金币</h2>
			<h3>转发一次赚{{INTERGRAL}}个金币</h3>
		</div>
		<div class="doctor_info">
			<img :src="avatar_url" alt="" class="avatar">
			<li class="hospital">{{hospitalName}}</li>
			<li class="doctor_name">{{doctorDepartment}} {{doctorName}}</li>
			<li class="share_text">“帮我转一下，有事我帮你”</li>
			<li v-if="freeShareTimes" class="share_times">*免费帮助还需转发{{freeShareTimes}}次</li>
			<img class="red_bg" src="@/assets/img/duoduo/red_bg_.png" alt="">
			<img class="half_coin" src="@/assets/img/duoduo/coin_half.png" alt="">
			<button class="share_btn">立即转发</button>
		</div>
	</div>
</template>

<script>
import { duoduo } from "@/utils/http"
import { getStrParam } from "@/utils/count";
import { Toast } from 'vant';
export default {
	name: 'share-page',
	data() {
		return {
			INTERGRAL: 3,
			ONCECOST: 10,
			total_integral: 0,
			hospitalName: '',
			doctorDepartment: '',
			doctorName: '',
			avatar_url: '',
			token: '',
			userId: '',
			doctorId: ''
		}
	},
	mounted () {
    let href = window.location.href
    this.token = getStrParam(href, "token")
    this.userId = getStrParam(href, "user_id")
    this.doctorId = getStrParam(href, "doctor_id")
		this.getDoctorInfo()
		this.getTotalIntegral()
	},
	computed: {
		freeShareTimes() {
			if (this.total_integral >= this.ONCECOST) {
				return 0
			} else {
				let num = this.total_integral % this.INTERGRAL
				if (num > 0) {
					return Math.floor(this.total_integral / this.INTERGRAL) + 1
				} else {
					return Math.floor(this.total_integral / this.INTERGRAL)
				}
			}
		}
	},
	methods: {
		getDoctorInfo() {
			let params = {
				doctor: this.doctorId,
				token: this.token
			}
			duoduo.getDoctorInfo(params).then(res => {
				this.hospitalName = res.data.practice_hospital
				this.doctorDepartment = res.data.dept_name
				this.doctorName = res.data.doctor_name
				this.avatar_url = res.data.avatar_url
			})
		},
		getTotalIntegral() {
			duoduo.getTotalIntegral({token: this.token}).then(res => {
				if (res.data.code === 0) {
					this.total_integral = res.data.totalIntegral
					// if (this.total_integral >= this.ONCECOST) {
					// 	this.$router.push({
					// 		path: '/注册页面', // TODO
					// 		query: {
					// 			token: this.token,
					// 			user_id: this.userId,
					// 			doctor_id: this.doctorId
					// 		}
					// 	})
					// }
				}
			})
		},
		userIntegralSave() {
			let params = {
				integral: this.INTERGRAL,
				token: this.token,
				type: 1
			}
			duoduo.userIntegralSave(params).then(res => {
				console.log(res)
			})
		}
	}
}
</script>

<style lang="scss" scoped>
.sharePage{
	width: 100%;
	height: 100vh;
	background: #FFDBCA url('./../../assets/img/duoduo/building_bg.png') no-repeat center bottom;
	background-size: 15rem auto;
	.leaf{
		width: 5.8rem;
		height: 6.4rem;
		position: absolute;
		right: 0;
		bottom: 0;
		z-index: 4;
	}
	.now_coin{
		span{
			margin-top: .96rem;
			display: inline-block;
			height: 1.76rem;
			line-height: 1.76rem;
			border-radius: 0 .88rem .88rem 0;
			background: #FFAD7F;
			color: #6D2700;
			font-weight: 600;
			font-size: .6rem;
			padding: 0 .6rem;
			font-style:italic;
		}
	}
	.text_content{
		width: 100%;
		text-align: center;
		margin-top: .4rem;
		color: #6D2700;
		font-style:italic;
		transform: rotate(-3deg);
		h2{
			font-size: 1.96rem;
			line-height: 2.6rem;
			font-weight: bold;
			text-shadow:-9px 5px 4px rgba(247,121,81,0.3);
		}
		h3{
			font-size: .72rem;
			line-height: 1.2rem;
		}
	}
	.doctor_info{
		width: 12.24rem;
		height: 12.7rem;
		position: absolute;
		left: 1.38rem;
		bottom: 3.06rem;
		background: linear-gradient(0deg,rgba(254,204,172,1),rgba(255,255,255,1));
		border-radius: .4rem;
		text-align: center;
		&::before{
			width: .78rem;
			height: 6rem;
			background: linear-gradient(0deg,#FF5526,#D82B01);
			content: '';
			position: absolute;
			left: -0.8rem;
			top: 3.8rem;
			border-radius: .4rem 0 0 0;
		}
		&::after{
			width: .78rem;
			height: 6rem;
			background: linear-gradient(0deg,#FF5526,#D82B01);
			content: '';
			position: absolute;
			right: -0.8rem;
			top: 3.8rem;
			border-radius: 0 .4rem 0 0;
		}
		.avatar{
			width: 4rem;
			height: 4rem;
			border-radius: 50%;
			margin-top: -2rem;
		}
		.hospital{
			font-size: .72rem;
			color: #6D2700;
			margin: .6rem 0 .3rem;
		}
		.doctor_name{
			font-size: .72rem;
			color: #6D2700;
			font-weight: bold;
		}
		.share_text{
			margin-top: .7rem;
			font-size: .92rem;
			color: #FF0000;
			font-weight: 600;
		}
		.share_times{
			font-size: .72rem;
			color: #6D2700;
			margin: .66rem 0 0 0;
		}
		.red_bg{
			width: 13.9rem;
			height: 6.64rem;
			position: absolute;
			left: -0.83rem;
			bottom: -2.5rem;
			z-index: 2;
		}
		.share_btn{
			width: 8rem;
			height: 1.8rem;
			background:linear-gradient(0deg,rgba(250,185,143,1),rgba(254,250,241,1));
			box-shadow:0px 5px 20px 0px rgba(113,0,0,0.3);
			border-radius:45px;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			margin: auto;
			border: none;
			font-size: .96rem;
			color: #6D2700;
			font-weight: bold;
			z-index: 3;
		}
		.half_coin{
			width: 1.14rem;
			height: 2.4rem;
			position: absolute;
			left: -1.1rem;
			top: 5.1rem;
		}
	}
}
</style>
                                
                            
                                
                            