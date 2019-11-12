import Auth from './auth'
import jumpTo from './navigation'
import axios from 'axios'


const URL = "http://localhost:3001/";

const serverCall = (config) => {
  //header authorization
  if (Auth.user_token) {
    const token = Auth.getToken()
    config.headers = {
      "authorization": token
    }
  }
  //interceptors handle network error
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      if (!error.response) {
        error.response = {
          data: 'net work error',
          status: 500
        }
      }
      if(error.response.status===401){
        Auth.logout()
        jumpTo('/')
        throw error
      }
      return Promise.reject(error);
    });
  config.baseURL = URL
  return axios(config)
}
export default serverCall

export const login = (email, password) => {
  const body =
  {
    "credential": {
      "email": email,
      "password": password
    }
  }
  return serverCall({
    method: 'POST',
    url: 'users',
    data: body
  })
    .then(res => {
      Auth.setUserToken(res.data.user_token)
      return res
    })
}