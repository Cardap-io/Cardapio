import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import {BrowserRouter} from 'react-router-dom'
import React from 'react'
import {Routes} from './Routes'
import Footer from '../components/template/Footer'
import {registerNav} from '../services/navigation'

export default props =>
    <BrowserRouter ref={registerNav}>
        <div className="app">
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>