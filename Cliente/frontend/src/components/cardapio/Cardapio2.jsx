import React, {Component} from 'react'
import Main from '../template/Main'
import _ from 'lodash'
import {getAllProducts} from '../../redux/action/produtoAction'
import {connect} from 'react-redux'

export default class Cardapio extends Component {

    constructor(props){
        super(props)
        this.state = {
            produtos:this.props.produtos
        }
    }

    groupProdutos(){
        var produtos = _.groupBy(this.props.produtos,'categoria')
        return produtos
    }

    componentDidMount() {
          this.props.getAllProducts()
      }

    /*renderCardapio(){
        const {produtos} = this.props
        return (
            <div className="row">
                <div className="col">
                    {produtos && produtos.map( p=>
                    <React.Fragment>
                        <div className="panel-heading">
                            <div className="panel-title" key={p.nome} onClick={() => this.props.history.push(`/produto/${p.id}`)}>
                                {p.nome}
                            </div>
                        </div>
                        <div id={p.id} className="panel">
                            <div className="panel-body">
                                <p className="desc">{p.descricao}</p>
                            </div>
                            <div className="panel-footer">
                                <h5 className="">R${p.valor}</h5>
                            </div>       
                        </div>
                    </React.Fragment>
                    )}        
                    <br/>
                </div>
            </div>
        )
    }*/

    renderCardapio(){
        return Object.keys(this.groupProdutos()).map( categoria =>(
            <div className="row">
                <div className="col">        
                    <h4>{categoria}</h4>
                    <br/>
                    <div className="panel-group" key={categoria}>
                        <div className="panel panel-default mb-3" >
                            {this.groupProdutos()[categoria].map(prod =>(
                                <React.Fragment>
                                    <div className="panel-heading">
                                        <h4 className="panel-title" key={prod.id}>
                                            <div onClick={() => this.props.history.push(`/produto/${prod.id}`)} className="title">
                                                    {prod.nome}
                                            </div>
                                        </h4>
                                    </div>
                                    <div id={prod.id} className="panel">
                                        <div className="panel-body">
                                            <p className="desc">{prod.descricao}</p>
                                        </div>
                                        <div className="panel-footer">
                                            <h5 className="">R${prod.valor}</h5>
                                        </div>       
                                    </div>
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        ))
    }


    renderNome(){
        return(
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <h3>{this.state.nome}</h3>
                </div>
            </div>
        </React.Fragment>
            )
    }

    render(){
        return(
            <React.Fragment>
                <Main>
                <div className="container-fluid col-8">
                    
                    {/*this.renderNome()*/}
                    {this.renderCardapio()}
                </div>
                </Main>
            </React.Fragment>
        )

    }

}    

const mapStoreToProps = state => ({
    produtos: state.produto.produtos
})
const mapDispatchToProps = dispatch =>({
    getAllProducts: ()=>dispatch(getAllProducts())
})

const aaa = connect(mapStoreToProps,mapDispatchToProps)(Cardapio)
export {aaa as Cardapio}