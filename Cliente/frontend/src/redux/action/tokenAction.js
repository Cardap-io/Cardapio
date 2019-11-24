import { login } from '../../services/serverCall'
import {
  POST_TOKEN_BEGIN,
  POST_TOKEN_SUCCESS,
  POST_TOKEN_FAIL,
  INSERT_TOKEN_SUCCESS,
  INSERT_TOKEN_FAIL
} from '../actionTypes/tokenTypes'

export const postToken = (email, password) => dispatch => {
  dispatch({
    type: POST_TOKEN_BEGIN
  })
  return login(email, password)
    .then(res => {
      dispatch({
        type: POST_TOKEN_SUCCESS,
        payload: res
      })
      if(res.status == 200 || res.status == 201){
      return res
    }
    })
    .catch(error => {
      dispatch({
        type: POST_TOKEN_FAIL,
        payload: { error }
      })
      throw error
    })
}

export const insertToken = () => dispatch => {
  let token
  if (localStorage.getItem('auth')) {
    token = JSON.parse(sessionStorage.getItem('auth'))
    dispatch({
      type: INSERT_TOKEN_SUCCESS,
      payload: token
    })
  } else {
    dispatch({
      type: INSERT_TOKEN_FAIL
    })
  }
}
