import serverCall from '../../services/serverCall'
import {//GET_ALL_PRODUCTS_BEGIN,
        //GET_ALL_PRODUCTS_SUCCESS,
        //GET_ALL_PRODUCTS_FAIL,
        //GET_PRODUCT_BEGIN,
        GET_PRODUCT_SUCCESS,
        //GET_PRODUCT_FAIL
      } from '../actionTypes/produtoType'
import Axios from 'axios'

const url = ' http://localhost:3001/produtos/'
/*export const getAllProducts=() => dispatch=>{
  dispatch({
    type:GET_ALL_PRODUCTS_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`cardapio/`
  })
  .then(res=>{
    dispatch({
      type: GET_ALL_PRODUCTS_SUCCESS,
      payload: res
    })
    console.log(res)
    return res
  })
  .catch(error=>{
    dispatch({
      type: GET_ALL_PRODUCTS_FAIL,
      payload: {error}
    })
    return error
  })
}*/

export const getProduct = (id) => dispatch=>  {
  return Axios.get(url+id).then(res => {
    console.log(res.data)
      return dispatch({
        type:GET_PRODUCT_SUCCESS,
        payload:res.data
      })
  }).catch( erro => {
    console.log(erro)
  })
}

