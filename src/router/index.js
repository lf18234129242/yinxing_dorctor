import Vue from 'vue'
import Router from 'vue-router'
// import RegisterChooseIll from '@/components/Register-chooseIll'

Vue.use(Router)

function loadView(view) {
  return () => import(/* webpackChunkName: "view-[request]" */ `@/components/${view}.vue`)
}

export default new Router({
  routes: [
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
      path: '/RegisterPatient',
      name: 'RegisterPatient',
      component: loadView('Register-patient'),
      meta:{
        index:2,
        auth:true,
        title:'患者信息'
      }
    },
    {
      path: '/RegisterBindPhoneNum',
      name: 'RegisterBindPhoneNum',
      component: loadView('Register-bindPhoneNum'),
      meta:{
        index:3,
        auth:true,
        title:'绑定手机号'
      }
    },
    {
      path: '/RegisterChooseIllStep',
      name: 'RegisterChooseIllStep',
      component: loadView('Register-chooseIllStep'),
      meta:{
        index:4,
        auth:true,
        title:'选择病程'
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
  ]
})
