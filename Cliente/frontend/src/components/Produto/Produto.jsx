import React,{Component} from 'react'
import Main from '../template/Main'
import jumpTo from '../../services/navigation'
import PropTypes from 'prop-types'
import {getProduct} from '../../redux/action/produtoAction'
import {postCart} from '../../redux/action/carrinhoAction'
import {connect} from 'react-redux'



class Produto extends Component{
    constructor(props){
        super(props)
        this.state = {
            produto:this.props.produto
        }

    }

    static propTypes = {
        produto: PropTypes.object.isRequired
    }

    componentDidMount(){
        let id = this.props.location.pathname.split("/").slice(-1)[0]
        console.log(id)
        this.props.getProduct(id)
        //getProduct(this.props.location.pathname.split("/").slice(-1)[0])
    }

    addCarrinho = () => {
        this.props.postCart(this.props.location.pathname.split('/').slice(-1)[0])
        jumpTo('/carrinho')
    }

    handleClick = (produto) =>{
        this.setState({produto})
    }


    updateField(event){
        const obs = {...this.state.obs}
        obs[event.target.observacao] = event.target.value
        this.setState({obs})
    }

    renderProduto(){
        return (
        <div className="content">
        {this.props.produto && 
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <h4>{this.props.produto.nome}</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="desc">{this.props.produto.descricao}</p>
                </div>
                <div className="col">
                    <p className="">R${this.props.produto.valor}</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label>Observações:</label>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <textarea name="observacao" cols="25" rows="10" onChange={ e => this.updateField(e)} 
                    placeholder="Observações" />
                </div>
            </div>
        </React.Fragment>}
        </div>
        )}


render(){
    return(
    <Main>
        <div className="container-fluid col-8">
            {this.renderProduto()}
            <div className="btn btn-danger" onClick={this.addCarrinho}>Adicionar ao carrinho</div>
        </div>
    </Main>
    )}

}

const mapStateToProps = state =>({
    produto: state.produto.produto
})

const mapDispatchToProps = dispatch =>({
    getProduct: produto => {dispatch(getProduct(produto))},
    postCart: pid => {dispatch(postCart(pid))}
})

const aaa = connect(mapStateToProps,mapDispatchToProps)(Produto)

export {aaa as Produto }