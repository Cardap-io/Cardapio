import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'
//import Logo from '../template/Logo'
import Footer from '../template/Footer'
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


    /*componentWillMount(){//função que monsta os componentes
        axios(baseURL).then( resp => {
            this.setState({list:resp.data})
        })
    }*/

    renderCardapio(){
        return _.map( this.state.array, Produtos=> {
        return(
        <div className="container-fluid col-8">
            <div className="row">
                <div className="col">
                    <h4>{Produtos.Categoria}</h4>
                    <br/>
                    <div className="panel-group">
                        <div className="panel panel-default" key={Produtos.Categoria}>
                            {this.renderItens(Produtos)}
                        </div>
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
                <div className="panel-heading" key={itens.ID}>
                    <h4 className="panel-title">
                        <a href={'itens/'+ itens.ID} className="title">
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

    render(){
        return(
            <React.Fragment>
            <Main {...headerProps}>
               {this.renderCardapio()}
            </Main>
            <Footer/>
            </React.Fragment>
        )

    }

}    
