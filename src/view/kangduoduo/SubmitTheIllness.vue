<template>
  <div class="SubmitTheIllness">
		<header>
			<h2>描述病情</h2>
			<textarea 
				id="illness_desc" 
				cols="30" 
				rows="10" 
				maxlength="500" 
				placeholder="请详细描述您的主要症状，也可上传症状部位的照片或更多资料，会得到医生更详细的知道！"
				v-model="illness_desc"	
			></textarea>
			<h2>添加照片</h2>
			<van-uploader
				v-model="fileList"
				multiple
				:max-count="9"
				:before-read="beforeRead"
				:after-read="afterRead"
				class="uploader"
			/>
		</header>
		<footer>
			<h3>温馨提示</h3>
			<li>1.提交详细信息，医生可以给更准确的回复</li>
			<li>2.该服务是医生利用空闲时间进行的免费帮忙</li>
			<li>3.本服务为免费帮忙，内容仅供参考，如具体病情请及时前往门诊就医。</li>
			<van-button round class="submit" @click="handleSubmit">立即提交</van-button>
		</footer>
	</div>
</template>

<script>
import { yinxing } from "@/utils/http"
import { Toast } from 'vant';
import { count, getStrParam } from "@/utils/count";
export default {
  name: "SubmitTheIllness",
  data() {
    return {
      illness_desc: "",
      fileList: [],
      fileArr: [],
    }
	},
	methods: {
		handleSubmit() {
      let fileStr = this.fileArr.join(",");
		},
    // 上传图片
    afterRead(file) {
      file.status = 'uploading'
      file.message = '上传中...'
      // Toast.loading({
      //   message:'正在上传中...',
      //   duration:0,
      //   forbidClick: true
      // })
      yinxing.uploadBase64Url({
        base64: file.content
      }).then(res => {
        if (res.data.code === 0) {
          this.$toast.success("上传成功");
          this.fileArr.push(res.data.url);
        }
      })
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
}
</script>

<style lang="scss">
.van-uploader__upload{
	width: 4rem;
	height: 4rem;
	border-radius:.4rem;
	margin: 0 .6rem .6rem 0;
}
.van-uploader__preview-image{
	width: 4rem;
	height: 4rem;
}
.van-uploader__upload-icon{
	font-size: 1.2rem;
}
</style>
<style lang="scss" scoped>
.SubmitTheIllness{
	header{
		width: 100%;
		background: #fff;
		padding: .6rem;
		box-sizing: border-box;
		border-bottom: .4rem solid #F2F2F2;
		h2{
			font-size: .72rem;
			height: 1rem;
			line-height: 1rem;
			color: #010101;
			font-weight: bold;
			margin-bottom: .4rem;
		}
		#illness_desc{
			width: 100%;
			height: 5.6rem;
			display: block;
			border: none;
			resize: none;
			margin-bottom: .4rem;
			font-size: .6rem;
			line-height: .96rem;
			border-bottom: .02rem solid #ddd;
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
		.submit{
			width:8.4rem;
			height:1.76rem;
			background:linear-gradient(90deg,rgba(0,181,140,1) 0%,rgba(0,104,82,1) 99%);
			box-shadow:0px .1rem .2rem 0px rgba(0,106,84,0.3);
			color: #fff;
			font-weight:600;
			border: none;
			margin: 2rem auto 0;
			display: block;
			span{
				font-size: .72rem;
			}
		}
	}
}
</style>
