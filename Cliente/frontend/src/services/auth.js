class Auth {
  constructor() {
    this.user_token = JSON.parse(sessionStorage.getItem('auth'))||{}
  }
  getToken() {
    return this.user_token.token
  }
  getUserId() {
    return this.user_token.user_id
  }
  setUserToken(new_token) {
    this.user_token = new_token
    sessionStorage.setItem('auth', JSON.stringify(new_token))
  }
  logout() {
    sessionStorage.removeItem('auth')
  }
}
export default new Auth()