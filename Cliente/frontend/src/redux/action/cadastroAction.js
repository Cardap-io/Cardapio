import serverCall from '../../services/serverCall'
import {POST_SIGNIN_BEGIN,
        POST_SIGNIN_SUCCESS,
        POST_SIGNIN_FAIL}
        from '../actionTypes/cadastroTypes'

export const signin=(nome,sobrenome,telefone,
  cpf,data_nascimento,email,senha)=>dispatch=>{
  dispatch({
    type: POST_SIGNIN_BEGIN,
  })
  return serverCall({
    method:'POST',
    url:'/users',
    data:{
      nome,sobrenome,telefone,cpf,data_nascimento,email,senha
    }
  })
  .then(res=>{
    dispatch({
      type:POST_SIGNIN_SUCCESS,
      payload:res
    })
    if(res.status == 200 || res.status == 201){
    return res}
  })
  .catch(error=>{
    dispatch({
      type:POST_SIGNIN_FAIL,
      payload:{error}
    })
    throw error
  })
}
