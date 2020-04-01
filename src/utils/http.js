import api from './apiconfig'
import axios from './axios'
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)
const http = request => {
    return new Promise((resolve, reject) => {
        request.then(res => {
            if (res.data.code === 0) {
                return resolve(res)
            } else {
                Toast(res.data.msg)
            }
        }).catch(err => {
            Toast(err.data.msg)
            return reject(err)
        })
    })
}

export const yinxing = {
    getProcessList: async(token) => {
        const res = await http(axios.post(api.process_list,token))
        if(res) {
            return Promise.resolve(res)
        }
        return Promise.reject(false)
    },
    processSave: async(params) => {
        const res = await http(axios.post(api.process_save, params))
        if(res) {
            return Promise.resolve(res)
        }
        return Promise.reject(false)
    },
    doctorsOrder: async(params) => {
        const res = await http(axios.post(api.doctorsOrder, params))
        if(res) {
            return Promise.resolve(res)
        }
        return Promise.reject(false)
    },
    theoryInfo: async(params) => {
        const res = await http(axios.post(api.theoryInfo, params))
        if(res) {
            return Promise.resolve(res)
        }
        return Promise.reject(false)
    },
    getIllList: async(params) => {
        const res = await http(axios.post(api.ill_list, params))
        if(res) {
            return Promise.resolve(res)
        }
        return Promise.reject(false)
    },
    illnessSave: async(params) => {
        const res = await http(axios.post(api.illness_save, params))
        if(res) {
            return Promise.resolve(res)
        }
        return Promise.reject(false)
    },
    messageSave: async(params) => {
        const res = await http(axios.post(api.message_save, params))
        if(res) {
            return Promise.resolve(res)
        }
        return Promise.reject(false)
    },
    getDoctorCode: async(params) => {
        const res = await http(axios.post(api.doctor_code, params))
        if(res) {
            return Promise.resolve(res)
        }
        return Promise.reject(false)
    },
    phoneSave: async(params) => {
        const res = await http(axios.post(api.phone_save, params))
        if(res) {
            return Promise.resolve(res)
        }
        return Promise.reject(false)
    },
    getPhoneCode: async(params) => {
        const res = await http(axios.post(api.phone_code, params))
        if(res) {
            return Promise.resolve(res)
        }
        return Promise.reject(false)
    },
    datumSave: async(params) => {
        const res = await http(axios.post(api.datum_save, params))
        if(res) {
            return Promise.resolve(res)
        }
        return Promise.reject(false)
    },
    uploadBase64Url: async(params) => {
        const res = await http(axios.post(api.uploadBase64_url,params))
        if(res) {
            return Promise.resolve(res)
        }
        return Promise.reject(false)
    },
    userpushSave: async(params) => {
        const res = await http(axios.post(api.userpush_save, params))
        if(res) {
            return Promise.resolve(res)
        }
        return Promise.reject(false)
    },
}