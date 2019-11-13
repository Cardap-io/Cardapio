import React, {Component} from 'react'
import Main from '../template/Main'
import _ from 'lodash'

export default class Cardapio extends Component {

    constructor(props){
        super(props)
    }

    groupProdutos(){
        var produtos = _.groupBy(this.props.produtos,'categoria')
        return produtos
    }

    componentDidMount() {
        if (!this.props.produtos) {
          this.props.getAllProducts()
        }
      }

    renderCardapio(){
        const {produtos} = this.props
        return (
            <div className="row">
                <div className="col">
                    {produtos && produtos.map( p=>
                        <div key={p.nome} onClick={() => this.props.history.push(`/produto/${p.id}`)}>
                            <p>{p.nome}</p>
                        </div>
                    )}        
                    <br/>
                </div>
            </div>
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
                    {/*this.renderNome()*/}
                    {this.renderCardapio()}
                </div>
                </Main>
            </React.Fragment>
        )

    }

}    
