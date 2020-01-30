import axios from 'axios'
import url from './apiconfig'
import Vue from 'vue'
import router from './router'
function count(id, token) {
    axios.post(url.userpush_save, {
        token: token,
        pushId: id
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
const uploadBase64_url = "https://admin.okginko.com/ginkgo-admin/sys/oss/uploadBase64"

export { count, getStrParam, queryUserInfo, showHtml, uploadBase64_url }