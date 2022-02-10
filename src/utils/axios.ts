import Axios from 'axios'
import { ElMessage } from 'element-plus'

const baseURL = 'https://api.github.com' // 基础路径

const axios = Axios.create({
  baseURL,
  headers: {
    'Content-type': 'application/json'
  },
  timeout: 20000
})

// 请求拦截器
axios.interceptors.request.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 相应拦截器
axios.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      ElMessage({
        message: `Code: ${code}, Message: ${msg}`,
        type: 'error'
      })
      console.error('[Axios Error]', error.response)
    } else {
      ElMessage({
        message: error,
        type: 'error'
      })
    }

    return Promise.reject(error)
  }
)

export default axios
