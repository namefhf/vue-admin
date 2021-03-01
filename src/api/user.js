import service from '@/utils/request'
export function login(data) {
  return service({
    method: 'POST',
    url: '/user/login',
    data
  })
}
export function getUserInfo(token) {
  return service({
    method: 'GET',
    url: '/user/userinfo',
    params: {
      token
    }
  })
}
