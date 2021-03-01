import axios from 'axios'
import { getToken } from '@/utils/auth'
const service = axios.create({
  baseURL: 'http://111.229.68.156:3000'
})
service.interceptors.request.use(
  config => {
    const token = getToken()
    if (token) {
      config.headers.Authoration = token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)
export default service
