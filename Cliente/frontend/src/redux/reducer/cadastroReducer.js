import {
    POST_SIGNIN_BEGIN,
    POST_SIGNIN_SUCCESS,
    POST_SIGNIN_FAIL
  } from '../actionTypes/cadastroTypes'
  
  const initialState = {
    signin_loading: false,
    error: {},
  }
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case POST_SIGNIN_BEGIN:
        return {
          ...state,
          signin_loading: true
        }
      case POST_SIGNIN_SUCCESS:
        console.log(action.payload)
        return {
          ...state,
          signin_loading: false,
        }
      case POST_SIGNIN_FAIL:
        return {
          ...state,
          signin_loading: false,
          error: action.payload.error.response.data
        }
      default:
        return state
    }
  }