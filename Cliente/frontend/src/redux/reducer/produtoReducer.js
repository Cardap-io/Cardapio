import {GET_ALL_PRODUCTS_SUCCESS,
        GET_ALL_PRODUCTS_FAIL,
        GET_PRODUCT_SUCCESS,
        GET_PRODUCT_FAIL} from '../actionTypes/produtoType'
  
  const initialState = {
    produtos:[],
    produto:null
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case GET_ALL_PRODUCTS_SUCCESS:
        return {
          ...state,
          produtos: action.payload
        }
      case GET_ALL_PRODUCTS_FAIL:
        return {
          ...state,
          error: action.payload.error.response
        }
      case GET_PRODUCT_SUCCESS:
        console.log(action.payload)
        return {
          ...state,
          produto: action.payload
        }
      case GET_PRODUCT_FAIL:
        return {
          ...state,
          error: action.payload.error.response
        }
      default:
        return state
    }
  }