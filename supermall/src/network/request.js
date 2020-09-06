//导入第三方库
import axios from 'axios'

//导出
export function request(config){
  // 创建一个axios实例
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:8000/api/z8',//请求路径
    timeout: 5000,//请求超时时间
  })

  //请求前的拦截器
  instance.interceptors.request.use(config => {
    // 在发送请求之前做些什么
    console.log('发送请求')
    return config
  }, err => {
     // 对请求错误做些什么
    return Promise.reject(err)
  })

  //响应前的拦截器
  instance.interceptors.response.use( res => {
    // console.log(res)
    return res
  }, err => {
    console.log(err)
    return Promise.reject(err)
  })

  //发送真正的网络请求
  return instance(config)
}


