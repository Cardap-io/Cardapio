import React,{Component} from 'react'
import QrReader from 'react-qr-reader'
import Logo from '../template/Logo'
import Main from '../template/Main'

export default class LeitorQR extends Component{
    state = {
        result: 'No result'
    }

    handleScan = data => {
        if(data){
            this.setState({
                result:data
            })
        }
    }

    handleError = err =>{
        console.error(err)
    }

    render(){
        return(
        <React.Fragment>
            <Logo />
            <Main>
                <QrReader delay={300}
                onError={this.handleError}
                onScan={this.handleScan}
                style={{ width:'100%'}}
                facingMode="user"
                 />
                <p>{this.state.result}</p>    
            </Main>
        </React.Fragment>

        )
    }

}