import React from 'react'
import {Switch, Route} from 'react-router'

import Signup from '../components/cadastro/Signup'
import Login from '../components/Login/Login'
import Cardapio from '../components/cardapio/Cardapio'
import Produto from '../components/Produto/Produto'
import LeitorQR from '../components/LeitorQR/LeitorQR'

export default props =>
        <Switch>
            <Route exact path="/" component={Login} />
            {/*<Route path="/login" component={Login} />*/}
            <Route path="/signup" component={Signup} />
            <Route key="cardapio" path="/app" component={Cardapio}/>
            <Route key="produto" path="/produto" component={Produto} />
            <Route key="leitor" path="/leitor" component={LeitorQR} />
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
