import serverCall from '../../services/serverCall'
import Axios from 'axios'
import {POST_SIGNIN_BEGIN,
        POST_SIGNIN_SUCCESS,
        POST_SIGNIN_FAIL}
        from '../actionTypes/cadastroTypes'

const url = 'http://localhost:3001/users/'
/*export const signin=(nome,email,password)=>dispatch=>{
  dispatch({
    type: POST_SIGNIN_BEGIN,
  })
  return serverCall({
    method:'POST',
    url:'/users/',
    data:{
      nome,email,password
    }
  })
  .then(res=>{
    dispatch({
      type:POST_SIGNIN_SUCCESS,
      payload:res
    })
    return res
  })
  .catch(error=>{
    dispatch({
      type:POST_SIGNIN_FAIL,
      payload:{error}
    })
    throw error
  })
}*/

export const signin = (nome,email,senha) => dispatch => {
  return Axios.post(url,{nome,email,senha}).then(res=>{
    console.log("entrou no res" ,res.data)
    return dispatch({
      type:POST_SIGNIN_SUCCESS,
      payload:res
    })
  }).catch( erro => {
    console.log(erro)
  })
}

