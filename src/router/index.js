import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/view/kangduoduo/${view}.vue`)
}
function loadYinxing(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/components/${view}.vue`)
}

export default new Router({
  routes: [
    {
      path: '/DoctorsDetails',
      name: 'DoctorsDetails',
      component: loadYinxing('Doctors-details'),
      meta:{
        index:2,
        auth:true,
        title:'疾病详情'
      }
    },
    {
      path: '/DoctorsOrder',
      name: 'DoctorsOrder',
      component: loadYinxing('Doctors-order'),
      meta:{
        index:1,
        auth:true,
        title:'我的医嘱'
      }
    },
    {
      path: '/',
      name: 'RegisterChooseIll',
      component: loadYinxing('Register-chooseIll'),
      meta:{
        index:1,
        auth:true,
        title:'选择疾病'
      }
    },
    {
      path: '/RegisterChooseIllStep',
      name: 'RegisterChooseIllStep',
      component: loadYinxing('Register-chooseIllStep'),
      meta:{
        index:2,
        auth:true,
        title:'选择病程'
      }
    },
    {
      path: '/RegisterPatient',
      name: 'RegisterPatient',
      component: loadYinxing('Register-patient'),
      meta:{
        index:3,
        auth:true,
        title:'填写信息'
      }
    },
    {
      path: '/RegisterBindPhoneNum',
      name: 'RegisterBindPhoneNum',
      component: loadYinxing('Register-bindPhoneNum'),
      meta:{
        index:4,
        auth:true,
        title:'绑定手机号'
      }
    },
    {
      path: '/RegisterSubmitPicture',
      name: 'RegisterSubmitPicture',
      component: loadYinxing('Register-submitPicture'),
      meta:{
        index:5,
        auth:true,
        title:'提交资料'
      }
    },
    {
      path: '/WechatCode',
      name: 'WechatCode',
      component: loadYinxing('WechatCode'),
      meta:{
        index:6,
        auth:true,
        title:'二维码'
      }
    },
    {
      path: '/Share',
      name: 'Share',
      component: loadView('Share'),
      meta:{
        index:1,
        auth:true,
        title:'转发领积分'
      }
    },
    {
      path: '/SubmitTheIllness',
      name: 'SubmitTheIllness',
      component: loadView('SubmitTheIllness'),
      meta:{
        index:1,
        auth:true,
        title:''
      }
    },
    {
      path: '/Chating',
      name: 'Chating',
      component: loadView('Chating'),
      meta:{
        index:2,
        auth:true,
        title:''
      }
    },
    {
      path: '/QuestionList',
      name: 'QuestionList',
      component: loadView('QuestionList'),
      meta:{
        index:1,
        auth:true,
        title:'问题列表'
      }
    },
  ]
})
