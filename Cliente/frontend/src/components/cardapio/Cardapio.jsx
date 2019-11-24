import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'
import _ from 'lodash'

const baseURL = 'http://localhost:3001/'


export default class Cardapio extends Component {

    constructor(){
        super()
        this.state = {
        }
        
    }


    groupProdutos(){
        var produtos = _.groupBy(this.state.prod,'categoria')
        return produtos
    }


    /*componentDidMount(){
        axios.all([axios.get(baseURL+'cardapio'),
                   axios.get(baseURL+'produtos')])
        .then(axios.spread((cardapio,produts) => {
            let name = cardapio.data.nome
            let produtos = produts.data
            this.setState({nome:name,prod:produtos})})).catch((err)=> {})}*/

    componentDidMount(){
        axios.get('http://www.cadapiounip.epizy.com/public/fornecedor/qrcode').then(resp => {
            this.setState({prod:resp.data})
        }).catch((err)=> {})
    }

    /*renderCardapio(prod){
        return _.map(prod, prod => {
        return(
            <div className="row">
                <div className="col" >
                    
                    <h4>{prod}</h4>
                    <br/>
                    <div className="panel-group" key={prod.categoria}>
                        <div className="panel panel-default mb-3" >
                            {this.renderItens()}
                        </div>
                    </div>
                </div>
            </div>
            )
        })
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

    /*renderItens(){
        return this.state.prod.map( produtos => {
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
        })

    }*/

    /*renderNome(){
        return(
        <React.Fragment>
            <div className="row">
                <div className="col">
                    <h3>{this.state.nome}</h3>
                </div>
            </div>
        </React.Fragment>
            )
    }*/

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
