import React, {Component} from 'react'
import Tabela from './Tabela'
import jumpTo from '../../services/navigation'
import { connect } from 'react-redux'
import {getCart,postCart} from '../../redux/action/carrinhoAction'

class Carrinho extends Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getCart()
    }

    renderItens(itens){
        return (
            <table className="striped bordered">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(itens).map(id =>
                    <tr key={id}>
                        <td>{itens[id].item.nome}</td>
                        <td>
                            <button className="btn btn-warning" ><i className="fa fa-plus-square"></i></button>
                            {itens[id].quantidade}
                            <button className="btn btn-warning" ><i className="fa fa-minus-square"></i></button>
                        </td>
                        <td>{itens[id].valor}</td>
                    </tr>               
                )}
            </tbody>
        </table>
        )
    }


    render(){ 
    const itens = this.props.carrinho.data
    const valor_total = this.props.carrinho.data.valor_total
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h4>Carrinho</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {this.renderItens(itens)}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Total: R$ {valor_total}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button onClick={() => jumpTo('/finalizar')}>
                        Finalizar compra
                    </button>
                </div>
            </div>
        </div>
    )
    }
}
const mapStoreToProps=state=>({
    carrinho:state.carrinho.carrinho
  })
  const mapDispatchToProps=dispatch=>({
    getCart:dispatch(getCart()),
    postCart:(pid,aumentar,diminuir)=>dispatch(postCart(pid,aumentar,diminuir))
  })
  
  const aaa = connect(mapStoreToProps,mapDispatchToProps)(Carrinho)

  export {aaa as Carrinho}