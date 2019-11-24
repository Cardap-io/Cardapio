import serverCall from '../../services/serverCall'
import {GET_ALL_PRODUCTS_BEGIN,
        GET_ALL_PRODUCTS_SUCCESS,
        GET_ALL_PRODUCTS_FAIL,
        GET_PRODUCT_BEGIN,
        GET_PRODUCT_SUCCESS,
        GET_PRODUCT_FAIL
      } from '../actionTypes/produtoType'

export const getAllProducts=() => dispatch=>{
  dispatch({
    type:GET_ALL_PRODUCTS_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/produtos`
  })
  .then(res=>{
    console.log(res.data)
    dispatch({
      type: GET_ALL_PRODUCTS_SUCCESS,
      payload: res.data
    })
    
    return res
  })
  .catch(error=>{
    dispatch({
      type: GET_ALL_PRODUCTS_FAIL,
      payload: {error}
    })
    return error
  })
}

export const getProduct = (id) => dispatch=>  {
  dispatch({
    type:GET_PRODUCT_BEGIN,
  })
  return serverCall({
    method:'GET',
    url:`/produtos/${id}`
  })
  .then(res=>{
    dispatch({
      type: GET_PRODUCT_SUCCESS,
      payload: res.data
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type: GET_PRODUCT_FAIL,
      payload: {error}
    })
    return error
  })
}

