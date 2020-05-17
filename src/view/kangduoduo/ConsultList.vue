<template>
  <div class="QuestionList pr">
		<div class="no_data" v-if="questionList.length === 0">
			<img src="@/assets/img/duoduo/no_record_data.png" alt="">
			<p>还没有病人提交问题</p>
      <p>谢谢您，{{doctorName}}医生，您辛苦了！</p>
		</div>
		<template v-else>
      <mescroll-vue ref="mescroll" :down="mescrollDown" :up="mescrollUp" @init="mescrollInit" class="scrollView">
        <div 
          class="question_list"
          v-for="(item,index) in questionList"
          :key="index"
          @click="handleQuestionDetail(item)"
        >
          <div class="question">
            <span :class="['question_status', item.type === 2 ? 'no' : 'yes']">{{item.type === 2 ? '已回复' : '未回复'}}</span>
            {{item.sick_desc}}
          </div>
          <div class="question_imgs">
            <div v-if="item.imgList[0] !== ''">
              <img 
                v-for="(jtem, idx) in item.imgList" 
                :key="idx" 
                v-show="idx < 3"
                :src="jtem" 
                alt=""
              >
            </div>
            <div v-else></div>
          </div>
          <div class="create_time">
            <span>{{item.update_time}}</span>
          </div>
        </div>
      </mescroll-vue>
		</template>
	</div>
</template>

<script>
import { duoduo } from "@/utils/http"
import { getStrParam } from "@/utils/count"
import { Toast } from 'vant'
import MescrollVue from 'mescroll.js/mescroll.vue'
import MeScroll from 'mescroll.js'
export default {
  name: "ConsultList",
  components: {
    MescrollVue
  },
  data() {
    return {
      questionList: [],
			token: '',
			page: 0,
			limit: 10,
			next_page: true,
			doctorName: '',
      mescroll: null, // mescroll实例对象
      mescrollDown:{}, //下拉刷新的配置. (如果下拉刷新和上拉加载处理的逻辑是一样的,则mescrollDown可不用写了)
      mescrollUp: { // 上拉加载的配置.
       callback: this.getConsultList, // 上拉回调,此处简写; 相当于 callback: 
      }
    }
	},
	mounted () {
    let href = window.location.href
    this.token = getStrParam(href, "token")
    sessionStorage.setItem("token", this.token)
    this.mescroll = new MeScroll(this.$refs.mescroll, { //请至少在vue的mounted生命周期初始化mescroll,以确保您配置的id能够被找到
      down: {
        auto: false, //是否在初始化完毕之后自动执行下拉回调callback; 默认true
        callback: this.getConsultList //下拉刷新的回调
      },
      up: {
        auto: true, //初始化完毕,是否自动触发上拉加载的回调
        isBoth: true, //上拉加载时,如果滑动到列表顶部是否可以同时触发下拉刷新;默认false,两者不可同时触发; 这里为了演示改为true,不必等列表加载完毕才可下拉;
        callback: this.getConsultList, //上拉加载的回调
        isBounce: false, //此处禁止ios回弹,解析(务必认真阅读,特别是最后一点): http://www.mescroll.com/qa.html#q10
        page: {
          num: 0,
          size: 10
        }
      }
    })
	},
	methods: {
		handleQuestionDetail(item) {
      this.$router.push({
        path: '/ReplyDoctor',
        query: {
          consultId: item.consult_id,
          doctorId: item.doctor_id,
          doctorName: this.doctorName,
          token: this.token
        }
      })
    },
    mescrollInit(mescroll) {
      this.mescroll = mescroll
    },
		getConsultList(page, mescroll) {
			if (!this.next_page) {
				Toast('没有更多数据了')
				return false
      }
      let num = page.num - 1
      let size = num > 0 ? num * page.size : num
			let params = {
				limit: page.size,
				page: size,
				token: this.token
			}
			duoduo.consultList(params).then(res => {
				if (res.data.code === 0) {
          this.doctorName = res.data.doctorName
          if (size === 0) {
            this.questionList = res.data.list
          } else if (res.data.list && res.data.list.length > 0) {
						this.questionList = this.questionList.concat(res.data.list)
						this.next_page = true
					} else {
						this.next_page = false
					}
					this.questionList.forEach(item => {
						item.imgList = item.disease_imgs.split(',')
          })
          this.$nextTick(() => {
            mescroll.endSuccess(this.questionList.length)
          })
				}
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.mescroll {
   position: fixed;
   padding-bottom: 1rem;
   top: 2px;
   bottom: 0;
   height: auto;
}
.QuestionList{
	width: 100%;
	min-height: 100vh;
	background: #F2F2F2;
	.my_integral{
		width: 100%;
		height: 1.5rem;
		background: #b8e98a;
		display: flex;
		align-items: center;
		justify-content: space-between;
		li{
			color: #111;
			font-size: .7rem;
			line-height: 1.5rem;
			padding: 0 .4rem;
			box-sizing: border-box;
			&:nth-child(2){
				text-decoration: underline;
			}
		}
	}
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
	.kong{
		width:15rem;
		height:1.96rem;
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
		// height: 6.7rem;
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
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-bottom: .5rem;
			img{
				width: 3.2rem;
				height: 3.2rem;
				display: inline-block;
				margin-right: .4rem;
			}
			.btn_box{
				&>span{
					color: red;
					font-size: .56rem;
					text-align: center;
				}
			}
			.look_detail{
				width:3rem;
				height:1rem;
				background:linear-gradient(90deg,rgba(0,181,140,1) 0%,rgba(0,104,82,1) 99%);
				box-shadow:0 .36rem 1.3rem 0 rgba(0,106,84,0.3);
				border-radius:.5rem;
				display: block;
				color: #fff;
				font-size: .6rem;
				font-weight:600;
				border: none;
				letter-spacing: .08rem;
				margin: auto 0;
				padding: 0;
				line-height: 1rem;
				align-self: flex-end;
			}
		}
		.create_time{
			width: 100%;
			font-size: .5rem;
			color: #666;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			justify-content: space-between;
		}
	}
	.share_arrow{
		width: 100%;
		height: 100vh;
		background: rgba(0,0,0,0.8);
		position: fixed;
		left: 0;
		top: 0;
		z-index: 10;
		img{
			width: 9.28rem;
			height: 7.28rem;
			position: absolute;
			left: 5.1rem;
			top: 1.42rem;
		}
		ul{
			width: 100%;
			margin-top: 12rem;
			color: #fff;
			padding-left: 1rem;
			box-sizing: border-box;
			transform: rotate(-5deg);
			li{
				font-size: 1rem;
				line-height: 1.8rem;
			}
		}
	}
}
</style>