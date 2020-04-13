const BASEURL = 'https://api.okginko.com'
const URL = {
	process_list: BASEURL + '/api/process/list', // 病程列表接口
	ill_list: BASEURL + '/api/illness/list', // 疾病列表接口
	datum_save: BASEURL + '/api/userinfo/datum/save', // 患者资料保存接口
	illness_save: BASEURL + '/api/userinfo/illness/save', // 疾病保存接口
	message_save: BASEURL + '/api/userinfo/message/save', // 患者信息保存接口
	phone_code: BASEURL + '/api/userinfo/phone/code', // 短信验证码接口
	phone_save: BASEURL + '/api/userinfo/phone/save', // 手机号保存接口
	process_save: BASEURL + '/api/userinfo/process/save', // 病程保存接口
	query_user_info: BASEURL + '/api/userinfo/query', // 用户信息查询接口
	userpush_save: BASEURL + '/api/userpush/save', // 推送点击率保存接口
	doctor_code: BASEURL + '/api/doctor/code', // 医生二维码
	doctorsOrder: BASEURL + '/api/userpush/doctorsOrder', // 科室疾病病程内容
	theoryInfo: BASEURL + '/api/userpush/theoryInfo', // 疾病原理内容
	// 用户咨询 -------------
	question_info: BASEURL + '/api/userconsult/info', // 单条记录接口
	question_list: BASEURL + '/api/userconsult/list', // 列表接口
	question_save: BASEURL + '/api/userconsult/save', // 咨询保存接口
}

module.exports = URL