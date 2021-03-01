const getters = {
  token: state => state.user.token,
  roles: state => state.user.roles,
  name: state => state.user.name
}
export default getters
