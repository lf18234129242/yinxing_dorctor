import axios from 'axios'
import url from './apiconfig'
import Vue from 'vue'
import router from './router'
function count(id, token) {
    axios.post(url.userpush_save, {
        token: token,
        pushId: id
    }).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
}
function getStrParam(href, name) {
    let splitIndex = href.indexOf("?");
    let str = href.substring(splitIndex + 1);
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = str.match(reg);
    if (r != null) return r[2];
    return "";
}
function queryUserInfo(token,type,router){ // 首次进入页面，查询是否有记录
    axios.post(url.query_user_info, {
        token: token,
        type: type
    }).then(res => {
        console.log(res)
        if(res.data.userStatus === 2){
            router.push(router)
        }
    }).catch(err => {
        console.log(err)
    })
}
// 解析富文本使用
function showHtml(str) {
    return str
    .replace(str ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/nbsp;/g,"")
    .replace(/&lt;/g,"<")
    .replace(/&gt;/g,">")
    .replace(/&quot;/g,"\"")
    .replace(/&#39;/g, "\'")
    .replace(/&amp;/g,"&")
}
export { count, getStrParam, queryUserInfo, showHtml }