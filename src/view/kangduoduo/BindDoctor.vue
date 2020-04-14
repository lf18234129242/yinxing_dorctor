<template>
  <div class="BindDoctor">
		<div class="header_title">
			<h3>交个医生朋友<br>病时医生来帮忙</h3>
			<h4>每个家庭总需要在医院有个熟人</h4>
		</div>
		<header>
			<div class="avatar_box">
				<img :src="doctorInfo.avatar_url" alt="">
			</div>
			<div class="info">
				<li>{{doctorInfo.practice_hospital}}</li>
				<li>{{doctorInfo.dept_name}}&nbsp;&nbsp;&nbsp;&nbsp;{{doctorInfo.doctor_name}}</li>
			</div>
			<div class="code_img_box">
				<img src="@/assets/img/duoduo/building_bg_small.png" alt="">
			</div>
			<li class="code_desc">扫码绑定，即可免费提问</li>
		</header>
		<section>
			<h4>下滑看看其他科室</h4>
			<h5 class="sixedge">点击头像 可同时聘请多个医生</h5>
			<ul class="doctor_list">
				<li 
					class="doctor_item"
					v-for="(item, index) in doctorList"
					:key="index"
					@click="handleChooseDoctor(item)"
				>
					<div class="pr avatar">
						<img :src="item.avatar_url" alt="">
						<div class="model" v-if="item.seledted">已选择</div>
					</div>
					<div class="doctor_name">{{item.dept_name}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.doctor_name}}</div>
				</li>
			</ul>
		</section>
		<div class="kong"></div>
		<footer>
			<van-button class="btn" @click="bindDoctor">免费聘请</van-button>
		</footer>
	</div>
</template>

<script>
import { duoduo } from "@/utils/http"
import { getStrParam } from "@/utils/count";
import { Toast } from 'vant';
export default {
	name: 'BindDoctor',
  data() {
    return {
      doctorList: [],
			seledtedArr: [],
			token: '',
			userId: '',
			doctorId: '',
			doctorInfo: {}
    }
	},
	mounted () {
    let href = window.location.href
    this.token = getStrParam(href, "token")
    this.userId = getStrParam(href, "user_id")
    this.doctorId = getStrParam(href, "doctor_id")
		sessionStorage.setItem("token", this.token)
		this.getDoctorInfo()
		this.getDoctorList()
	},
	methods: {
		bindDoctor() {
			let params = {
				doctorId: this.doctorIds,
				token: this.token
			}
			duoduo.bindDoctor(params).then(res => {
				console.log(res)
			})
		},
		getDoctorInfo() {
			let params = {
				doctor: this.doctorId,
				token: this.token
			}
			duoduo.getDoctorInfo(params).then(res => {
				if (res.data.code === 0) {
					this.doctorInfo = res.data
				}
			})
		},
		getDoctorList() {
			let params = {
				doctor: this.doctorId,
				token: this.token,
				limit: 9,
				page: 0
			}
			duoduo.getDoctorList(params).then(res => {
				if (res.data.code === 0) {
					this.doctorList.push(res.data)
					this.doctorList.forEach(item => {
						item.seledted = false
					})
				}
			})
		},
		handleChooseDoctor(data) {
			this.doctorList.forEach(item => {
				if (item.id === data.id) {
					if (item.seledted) {
						item.seledted = false
						this.seledtedArr.splice(this.seledtedArr.indexOf(item.id),1)
					} else {
						item.seledted = true
						this.seledtedArr.push(item.id)
					}
				}
			})
			this.doctorIds = this.seledtedArr.toString()
		}
	}
};
</script>

<style lang="scss" scoped>
.BindDoctor{
	width: 100%;
	background: #FFD2B2 url('./../../assets/img/duoduo/building_bg_small.png') no-repeat center 4.76rem;
	background-size: 100% auto;
	padding: .6rem .7rem;
	box-sizing: border-box;
	.header_title{
		color: #6D2700;
		text-align: center;
		transform: rotate(-3deg);
		font-style:italic;
		h3{
			text-shadow: -9px 5px 4px rgba(247,121,81,0.3);
			line-height: 2rem;
			font-size: 1.64rem;
			font-weight: 600;
		}
		h4{
			font-size: .72rem;
			line-height: 1.42rem;
		}
	}
	header{
		width:13.6rem;
		height:12.56rem;
		background:rgba(255,255,255,1);
		box-shadow:0px 1px .4rem 1px rgba(72,47,39,0.1);
		border-radius:.4rem;
		margin-top: 2.3rem;
		margin-bottom: .6rem;
		background: #fff url('./../../assets/img/duoduo/light_bg.png') no-repeat center top;
		background-size: 100% auto;
		border-top: 1px solid #FFD2B2;
		.avatar_box{
			width: 4rem;
			height: 4rem;
			border-radius: 50%;
			margin: -2rem auto 0;
			border: .1rem solid #FFEDD6;
			box-sizing: border-box;
			img{
				width: 3.8rem;
				height: 3.8rem;
				border-radius: 50%;
			}
		}
		.info{
			text-align: center;
			font-size: .6rem;
			color: #00221A;
			line-height: .96rem;
			margin-bottom: 1rem;
		}
		.code_img_box{
			width: 5.2rem;
			height: 5.2rem;
			margin: 0 auto;
			border:1px solid rgba(255, 169, 124, 1);
			box-shadow:-0.28rem .28rem 0px 0px rgba(255,230,213,1);
			border-radius:.4rem;
			display: flex;
			align-items: center;
			justify-content: center;
			img{
				width:4.74rem;
				height:4.74rem;
			}
		}
		.code_desc{
			margin-top: .8rem;
			color: #00221A;
			font-size: .6rem;
			text-align: center;
		}
	}
	section{
		width:13.6rem;
		background:rgba(255,255,255,1);
		box-shadow:0px 1px .4rem 1px rgba(72,47,39,0.1);
		border-radius:.4rem;
		background: #fff url('./../../assets/img/duoduo/light_bg.png') no-repeat center top;
		background-size: 100% auto;
		h4{
			color: #00221A;
			font-size: .84rem;
			width: 100%;
			height: 1.8rem;
			line-height: 1.8rem;
			text-align: center;
		}
		.sixedge{
			width: 9.4rem;
			height: 1.36rem;
			padding: 0 .5rem;
			position:relative;
			background: linear-gradient(90deg,rgba(0,181,140,1) 0%,rgba(0,104,82,1) 99%);
			box-shadow:0px .1rem .2rem 0px rgba(0,106,84,0.3);
			margin: 0 auto .92rem;
			color: #fff;
			font-size: .6rem;
			text-align: center;
			line-height: 1.36rem;
			&::after{
				content: '';
				position: absolute;
				background-color: transparent;
				top: .18rem;
				right: -0.5rem;
				width: 1rem;
				height: 1rem;
				transform: rotate(45deg);
				-ms-transform: rotate(45deg);
				-moz-transform: rotate(45deg);
				-webkit-transform: rotate(45deg);
				-o-transform: rotate(45deg);
				background: linear-gradient(180deg,#00715B 0%,#006852 99%)
			}
			&::before{
				content: '';
				position: absolute;
				background-color: transparent;
				top: .18rem;
				left: -0.5rem;
				width: 1rem;
				height: 1rem;
				transform: rotate(45deg);
				-ms-transform: rotate(45deg);
				-moz-transform: rotate(45deg);
				-webkit-transform: rotate(45deg);
				-o-transform: rotate(45deg);
				background: linear-gradient(180deg,#00B58C 0%,#00AD85 99%);
			}
		}
		.doctor_list{
			width: 100%;
			padding: 0 0 4rem .86rem;
			box-sizing: border-box;
			display: flex;
			flex-wrap: wrap;			
			.doctor_item{
				width: 3.6rem;
				height: 5.4rem;
				margin: 0 .6rem 0 0;
				.avatar{
					width: 3.6rem;
					height: 3.6rem;
					box-sizing: border-box;
					border-radius: 50%;
					border: .1rem solid #FEF3F0;
					img{
						width: 100%;
						height: 100%;
						border-radius: 50%;
					}
					.model{
						position: absolute;
						left: 0;
						top: 0;
						width: 3.4rem;
						height: 3.4rem;
						border-radius: 50%;
						background: rgba(0,0,0,0.3);
						text-align: center;
						line-height: 3.6rem;
						color: #fff;
						font-size: .6rem;
						font-weight: 600;
					}
				}
				.doctor_name{
					text-align: center;
					width: 100%;
					height: 1rem;
					line-height: 1rem;
					font-size: .48rem;
					color: #00221A;
				}
			}
		}
	}
	.kong{
		width: 100%;
		height: 4.24rem;
	}
	footer{
		width: 100%;
		height: 4.24rem;
		position: fixed;
		left: 0;
		bottom: 0;
		.btn{
			width:8.4rem;
			height:1.76rem;
			background:linear-gradient(90deg,rgba(0,181,140,1) 0%,rgba(0,104,82,1) 99%);
			box-shadow:0 .36rem 1.3rem 0 rgba(0,106,84,0.3);
			border-radius:.88rem;
			display: block;
			margin: 0 auto;
			color: #fff;
			font-size: .72rem;
			font-weight:600;
			border: none;
			letter-spacing: .08rem;
		}
	}
}
</style>