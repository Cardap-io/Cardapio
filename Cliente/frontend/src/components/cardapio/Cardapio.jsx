import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'

const baseURL = 'http://localhost:3001/cardapio'

export default class Cardapio extends Component {

    constructor(){
        super()
        this.state = {
            id:'',
            nome:'',
            prod:[]
        }

    }

    componentDidMount(){
        axios.get(baseURL).then(({data})=>
         {this.setState({id:data.id,nome:data.nome,prod:data.produtos})})
         .catch((err) => {})
    }

    renderCardapio(){
        return this.state.prod.map(prod=> {
        return(
            <div className="row">
                <div className="col" >
                    <h4>{prod.categoria}</h4>
                    <br/>
                    <div className="panel-group" key={prod.categoria}>
                        <div className="panel panel-default mb-3" >
                            {this.renderItens(prod)}
                        </div>
                    </div>
                </div>
            </div>
            )
        })
    }

    renderItens(cat){
        return this.state.prod.map( produtos => {
            if(produtos === cat){
            return (
            <React.Fragment>
                <div className="panel-heading">
                    <h4 className="panel-title" key={produtos.id}>
                        <a href={"/produto/" + produtos.id} className="title">
                                {produtos.nome}
                        </a>
                    </h4>
                </div>
                <div id={produtos.id} className="panel">
                    <div className="panel-body">
                        <p className="desc">{produtos.descricao}</p>
                    </div>
                    <div className="panel-footer">
                        <h5 className="">R${produtos.valor}</h5>
                    </div>       
                </div>
    </React.Fragment>
            )
        }
        }
        )

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
                    {this.renderNome()}
                    {this.renderCardapio()}
                </div>
                </Main>
            </React.Fragment>
        )

    }

}    
