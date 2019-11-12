import {connect} from 'react-redux'
import Produto from './Produto'
import {getProduct} from '../../redux/action/produtoAction'
import {postCart} from '../../redux/action/carrinhoAction'

const mapStoreToProps = state =>({
    produto: state.produto.produto
})

const mapDispatchToProps = dispatch =>({
    getProduct:dispatch(getProduct(id)),
    postCart:() => dispatch(postCart())
})

export default connect(mapStoreToProps,mapDispatchToProps)(Produto)