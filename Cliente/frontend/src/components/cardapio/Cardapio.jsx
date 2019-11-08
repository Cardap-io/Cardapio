import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'
import _ from 'lodash'

const baseURL = 'http://localhost:3001/cardapio'

const headerProps ={
    title:'Cardapio'
}

export default class Cardapio extends Component {

    constructor(){
        super()
        this.state = {
            array:[]
        }

    }

    componentDidMount(){
        axios.get(baseURL).then(({data})=>
         {this.setState({array:data.Produtos})})
         .catch((err) => {})
    }

    renderCardapio(){
        return _.map( this.state.array, Produtos=> {
        return(
        
            <div className="row">
                <div className="col">
                    <h4>{Produtos.Categoria}</h4>
                    <br/>
                    <div className="panel-group">
                        <div className="panel panel-default mb-3" key={Produtos.Categoria}>
                            {this.renderItens(Produtos)}
                        </div>
                    </div>
                </div>
            </div>
            )
        })
    }

    renderItens(Produtos){
        return _.map(Produtos.Itens, itens => {
            return (
            <React.Fragment>
                <div className="panel-heading">
                    <h4 className="panel-title" key={itens.ID}>
                        <a href={"/produto/" + itens.ID} className="title">
                                {itens.Nome_do_item}
                        </a>
                    </h4>
                </div>
                <div id={itens.ID} className="panel">
                    <div className="panel-body">
                        <p className="desc">{itens.Descricao}</p>
                    </div>
                    <div className="panel-footer">
                        <h5 className="">R${itens.Preco}</h5>
                    </div>       
                </div>
    </React.Fragment>
            )
        })

    }

    renderBusca(){
        return(
        <div className="row">
            <div className="col">
                <input type="text" name="busca" placeholder="Buscar item..."/>
            </div>
        </div>
        )
    }

    render(){
        return(
            <React.Fragment>
                <Main {...headerProps}>
                <div className="container-fluid col-8">
                    {/*this.renderBusca()*/}
                    {this.renderCardapio()}
                </div>
                </Main>
            </React.Fragment>
        )

    }

}    
