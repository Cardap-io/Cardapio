import serverCall from '../../services/serverCall'
import Auth from '../../services/auth';
import Axios from 'axios';
import {POST_CART_BEGIN,
        POST_CART_SUCCESS,
        POST_CART_FAIL,
        GET_CART_BY_USERID_BEGIN,
        GET_CART_BY_USERID_SUCCESS,
        GET_CART_BY_USERID_FAIL} 
        from '../actionTypes/carrinhoTypes'

const url ='http://localhost:3001/carrinho'


export const getCartByUserId = () => dispatch => {
  let uid = Auth.getUserId()
  dispatch({
    type: GET_CART_BY_USERID_BEGIN
  })
  return serverCall({
    method: 'GET',
    url: `/carrinho`
  })
    .then(res => {
      dispatch({
        type: GET_CART_BY_USERID_SUCCESS,
        payload: res
      })
      return res
    })
    .catch(error => {
      dispatch({
        type: GET_CART_BY_USERID_FAIL,
        payload: { error }
      })
      return error
    })
}

export const postCart = (pid) => (dispatch) => {
  dispatch({
    type: POST_CART_BEGIN
  })
  /*return Axios.post(url,{pid}).then(res => {
    console.log(res.data)
    dispatch({
      type:POST_CART_SUCCESS,
      payload:res.data
    })
    return res
  }).catch(erro => {
    console.log(erro)
  })*/
  return serverCall({
    method: 'POST',
    data: {
      pid
    }
  })
    .then(res => {
      dispatch({
        type: POST_CART_SUCCESS,
        payload: res
      })
      return res
    })
    .catch(error => {
      dispatch({
        type: POST_CART_FAIL,
        payload: { error }
      })
      return error
    })
}
