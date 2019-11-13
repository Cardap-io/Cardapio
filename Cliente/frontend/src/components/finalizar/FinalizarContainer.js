import { connect } from 'react-redux'
import Finalizar from './Finalizar'
import {getCheckoutUrl} from '../../redux/action/finalizarAction'
import {getCartByUserId} from '../../redux/action/carrinhoAction'

const mapStoreToProps = state => ({
  carrinho:state.carrnho.carrinho,
  url:state.finalizar.approval_url,
  name:state.token.user_token.user_name
})
const mapDispatchToProps = dispatch => ({
  getCheckoutUrl:(cartId)=>dispatch(getCheckoutUrl(cartId)),
  getCartByUserId:()=>dispatch(getCartByUserId())
})

export default connect(mapStoreToProps, mapDispatchToProps)(Finalizar)