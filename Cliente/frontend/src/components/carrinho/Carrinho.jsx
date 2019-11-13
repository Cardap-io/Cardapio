import React, {Component} from 'react'
import Tabela from './Tabela'
import jumpTo from '../../services/navigation'
import { connect } from 'react-redux'
import {getCartByUserId,postCart} from '../../redux/action/carrinhoAction'

class Carrinho extends Component{

    constructor(props){
        super(props)
    }

    render(){
    const {preco, itens} = this.props.carrinho
    const {postCart} = this.props
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h4>Carrinho</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <Tabela itens={itens || {}} 
                handleClick={(pid, aumentar,diminuir) => postCart(pid,aumentar,diminuir)}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Total: R$ {preco}
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
    getCartByUserId:dispatch(getCartByUserId()),
    postCart:(pid,aumentar,diminuir)=>dispatch(postCart(pid,aumentar,diminuir))
  })
  
  const aaa = connect(mapStoreToProps,mapDispatchToProps)(Carrinho)

  export {aaa as Carrinho}