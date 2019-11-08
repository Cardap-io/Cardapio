import './Nav.css'
import React from 'react'

export default props =>
    <React.Fragment>
    
    <div className="menu-area">  
        <nav className="menu nav nav-masthead justify-content-center">
            <a className="nav-link" href="">{props.Item}</a>
        </nav>
   </div>
   </React.Fragment>