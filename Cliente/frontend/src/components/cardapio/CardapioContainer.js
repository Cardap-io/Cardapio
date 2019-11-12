import {getAllProducts} from '../../redux/action/produtoAction'
import {connect} from 'react-redux'
import Cardapio from './Cardapio2'

const mapStoreToProps = state => ({
    produtos: state.produto.produtos
})
const mapDispatchToProps = dispatch =>({
    getAllProducts: ()=>dispatch(getAllProducts())
})

export default connect(mapStoreToProps,mapDispatchToProps)(Cardapio)
