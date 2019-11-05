import React from 'react'
import {Switch, Route} from 'react-router'
import {BrowserRouter} from 'react-router-dom'

import Signup from '../components/cadastro/Signup'
import Login from '../components/Login/Login'
import Cardapio from '../components/cardapio/Cardapio'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/app" component={Cardapio}/>
            <Route path="*" component={() => <h1>Page not found</h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes