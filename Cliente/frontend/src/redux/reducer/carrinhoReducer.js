import {POST_CART_BEGIN,
  POST_CART_SUCCESS,
  POST_CART_FAIL,
  GET_CART_BEGIN,
  GET_CART_SUCCESS,
  GET_CART_FAIL} 
  from '../actionTypes/carrinhoTypes'
  
  const initialState = {
    cart: {}
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case POST_CART_BEGIN:
        return {
          ...state,
          error: {}
        }
      case POST_CART_SUCCESS:
        return {
          ...state,
          cart: action.payload.data
        }
      case POST_CART_FAIL:
        return {
          ...state,
          error: action.payload.error.response.data
        }
      case GET_CART_BEGIN:
        return {
          ...state,
          error: {}
        }
      case GET_CART_SUCCESS:
        return {
          ...state,
          cart: action.payload.data,
        }
      case GET_CART_FAIL:
        return {
          ...state,
          error: action.payload.error.response.data
        }
      default:
        return state
    }
  }