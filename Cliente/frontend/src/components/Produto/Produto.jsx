import React,{Component} from 'react'
import Main from '../template/Main'
import jumpTo from '../../services/navigation'

export default class Produto extends Component{
    constructor(props){
        super(props)
        this.state = {
            id:'',
            nome: '',
            descricao: '',
            valor: '',
            obs:''
        }
    }

    componentDidMount(){
        console.log(this.props)
        this.props.getProduct(this.props.location.pathname.split("/").slice(-1)[0]).bind(this)
    }

    addCarrinho = () => {
        this.props.postCart(
            this.state.id || this.props.location.pathname.split(-1)[0]
        ).then(res => {
            jumpTo('/carrinho')
        })
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
                    <textarea name="observacao" cols="30" rows="10" onChange={ e => this.updateField(e)} 
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
            <div className="btn" onClick={this.addCarrinho}>Adicionar ao carrinho</div>
        </div>
    </Main>
    )}

}