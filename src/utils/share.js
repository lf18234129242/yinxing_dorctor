// import Vue from 'vue'
import wx from 'weixin-js-sdk'
import { Toast } from 'vant'

export default function wxShare(
	debug = true,
	appId = '',
	timestamp = '',
	nonceStr = '',
	signature = '',
	title = '',
	desc = '',
	link = link,
	imgUrl = '',
	timelineTitle = ''
) {
	wx.config({
		debug: debug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		appId: appId, // 必填，公众号的唯一标识
		timestamp: timestamp, // 必填，生成签名的时间戳
		nonceStr: nonceStr, // 必填，生成签名的随机串
		signature: signature,// 必填，签名
		jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData'] // 必填，需要使用的JS接口列表
	})
	wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
		wx.updateAppMessageShareData({ 
			title: title, // 分享标题
			desc: desc, // 分享描述
			link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
			imgUrl: imgUrl, // 分享图标
			success: function () {
				// 设置成功
			},
			cancel: function() {
				// 分享失败
			}
		})
		wx.updateTimelineShareData({ 
			title: timelineTitle || title, // 分享标题
			link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
			imgUrl: imgUrl, // 分享图标
			success: function () {
				// 设置成功
			},
			cancel: function() {
				// 分享失败
			}
		})
	})
	wx.error(function (err) {
		// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
		Toast(err)
	})
}
