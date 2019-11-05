import './Nav.css'
import React from 'react'
import Logo from './Logo'

export default props =>
    <React.Fragment>
    
    <div className="menu-area"> 
         <Logo/> 
        <nav className="menu nav nav-masthead justify-content-center">
            <a className="nav-link active" href="/">Home</a>
            <a className="nav-link" href="#/">Saiba Mais</a>
            <a className="nav-link" href="#/">Contato</a>
        </nav>
   </div>
   </React.Fragment>