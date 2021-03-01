const TOKEN_KEY = 'Token'
export function setToken(token) {
  return window.sessionStorage.setItem(TOKEN_KEY, token)
}
export function getToken() {
  return window.sessionStorage.getItem(TOKEN_KEY)
}
export function removeToken() {
  return window.sessionStorage.removeItem(TOKEN_KEY)
}
