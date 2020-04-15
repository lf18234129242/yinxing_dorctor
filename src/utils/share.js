// import Vue from 'vue'
import wx from 'weixin-js-sdk'
import { Toast } from 'vant'
import { duoduo } from './http'
export default function wxShare(url) {
	return new Promise((resolve, reject) => {
		duoduo.jsInit({
			token: sessionStorage.getItem('token'),
			url: url
		}).then(res => {
			console.log('wxShare', res)
			wx.config({
				debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
				appId: res.data.appId, // 必填，公众号的唯一标识
				timestamp: res.data.timestamp, // 必填，生成签名的时间戳
				nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
				signature: res.data.signature,// 必填，签名
				jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
			})
			wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
				resolve()
			})
			wx.error(function (err) {
				// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
				Toast(err)
			})
		}).catch(err => {
			reject(err)
		})
	})
}
