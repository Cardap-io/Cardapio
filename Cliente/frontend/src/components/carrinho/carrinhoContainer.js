import { connect } from 'react-redux'
import Carrinho from './carrinho'
import {getCartByUserId,postCart} from '../../redux/action/carrinhoAction'

const mapStoreToProps=state=>({
  carrinho:state.carrinho.carrinho
})
const mapDispatchToProps=dispatch=>({
  getCartByUserId:dispatch(getCartByUserId()),
  postCart:(pid,aumentar,diminuir)=>dispatch(postCart(pid,aumentar,diminuir))
})

export default connect(mapStoreToProps,mapDispatchToProps)(Carrinho)