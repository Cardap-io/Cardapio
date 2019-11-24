import serverCall from '../../services/serverCall'
import {POST_CART_BEGIN,
        POST_CART_SUCCESS,
        POST_CART_FAIL,
        GET_CART_BEGIN,
        GET_CART_SUCCESS,
        GET_CART_FAIL} 
        from '../actionTypes/carrinhoTypes'

export const getCart = () => dispatch => {
  dispatch({
    type: GET_CART_BEGIN
  })
  return serverCall({
    method: 'GET',
    url: `/carrinho`
  })
    .then(res => {
      dispatch({
        type: GET_CART_SUCCESS,
        payload: res
      })
      return res
    })
    .catch(error => {
      dispatch({
        type: GET_CART_FAIL,
        payload: { error }
      })
      return error
    })
}

export const postCart = (id,nome,valor,observacoes) => (dispatch) => {
  dispatch({
    type: POST_CART_BEGIN
  })
  return serverCall({
    method: 'POST',
    url:'/carrinho',
    data: {
      id,nome,valor,observacoes
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
