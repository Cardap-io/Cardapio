import {combineReducers} from 'redux'
import token from './tokenReducer'
import cadastro from './cadastroReducer'
import produto from './produtoReducer'
import carrinho from './carrinhoReducer'
import finalizar from './finalizarReducer'


export default combineReducers({
  token,
  cadastro,
  produto,
  carrinho,
  finalizar
})