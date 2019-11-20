import React, {Component} from 'react'
import {Switch, Route} from 'react-router'

import {Signup} from '../components/cadastro/Signup'
import {Login} from '../components/Login/Login'
import {Cardapio} from '../components/cardapio/Cardapio2'
import {Produto} from '../components/Produto/Produto'
import LeitorQR from '../components/LeitorQR/LeitorQR'
import {Carrinho} from '../components/carrinho/Carrinho'
import {Finalizar} from '../components/finalizar/Finalizar'

import { connect } from 'react-redux'
import { insertToken } from '../redux/action/tokenAction'

class Routes extends Component{

componentDidMount(){
    this.props.insertToken()
}

    render(){
        return(
        <Switch>
            <Route exact path="/" component={LeitorQR} />
            <Route path="/login" component={Login} />
            <Route path="/cadastro" component={Signup} />
            <Route key="cardapio" path="/cardapio" component={Cardapio}/>
            {this.props.token && [
            <Route key="produto" path="/produto" component={Produto} />,
            <Route key="carrinho" path="/carrinho" component={Carrinho}/>,
            <Route key="finalizar" path="/finalizar" comporent={Finalizar} />
            ]}
            <Route key="leitor" path="/" component={LeitorQR} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
         ) }
}

const mapStoreToProps = state => ({
    token: state.token.user_token
  })
  const mapDispatchToProps = {
    insertToken
  }
  const aaa = connect(mapStoreToProps, mapDispatchToProps)(Routes)

  export {aaa as Routes}