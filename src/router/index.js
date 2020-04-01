import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/components/${view}.vue`)
}

export default new Router({
  routes: [
    {
      path: '/DoctorsDetails',
      name: 'DoctorsDetails',
      component: loadView('Doctors-details'),
      meta:{
        index:2,
        auth:true,
        title:'疾病详情'
      }
    },
    {
      path: '/DoctorsOrder',
      name: 'DoctorsOrder',
      component: loadView('Doctors-order'),
      meta:{
        index:1,
        auth:true,
        title:'我的医嘱'
      }
    },
    {
      path: '/',
      name: 'RegisterChooseIll',
      component: loadView('Register-chooseIll'),
      meta:{
        index:1,
        auth:true,
        title:'选择疾病'
      }
    },
    {
      path: '/RegisterChooseIllStep',
      name: 'RegisterChooseIllStep',
      component: loadView('Register-chooseIllStep'),
      meta:{
        index:2,
        auth:true,
        title:'选择病程'
      }
    },
    {
      path: '/RegisterPatient',
      name: 'RegisterPatient',
      component: loadView('Register-patient'),
      meta:{
        index:3,
        auth:true,
        title:'填写信息'
      }
    },
    {
      path: '/RegisterBindPhoneNum',
      name: 'RegisterBindPhoneNum',
      component: loadView('Register-bindPhoneNum'),
      meta:{
        index:4,
        auth:true,
        title:'绑定手机号'
      }
    },
    {
      path: '/RegisterSubmitPicture',
      name: 'RegisterSubmitPicture',
      component: loadView('Register-submitPicture'),
      meta:{
        index:5,
        auth:true,
        title:'提交资料'
      }
    },
    {
      path: '/WechatCode',
      name: 'WechatCode',
      component: loadView('WechatCode'),
      meta:{
        index:6,
        auth:true,
        title:'二维码'
      }
    },
  ]
})
