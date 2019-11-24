import React, {Component} from 'react'
import Main from '../template/Main'
import Logo from '../template/Logo'

import {connect } from 'react-redux'
import {postToken} from '../../redux/action/tokenAction'
import jumpTo from '../../services/navigation'


class Login extends Component {

    constructor(props){
        super(props)
        this.state ={
            user:{email:'',senha:''},
            logado:false

        }
    }

    save(event){
        if(this.state.user.email===""||this.state.user.senha===""){
            event.preventDefault()
            alert("Há campos vazios")
        }else{
        this.props.postToken(this.state.user.email,this.state.user.senha).then(res => {
            jumpTo('/cardapio')
            return res
        })
        }
    }

    updateField(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    renderForm(){
        return(
        <div className="container-fluid col-8">
            <div className="form justify-content-center">
            <div className="row">
                    <div className="col">
                <Logo />
            </div>
            </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" name="email" value={this.state.user.email}
                            onChange = {e => this.updateField(e)} placeholder="E-mail" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label>Senha</label>
                            <input type="password" className="form-control" name="senha" value={this.state.user.senha}
                            onChange = {e => this.updateField(e)} placeholder="Senha" />
                        </div>
                    </div>    
                </div>

                <div className="row">
                    <div className="col">
                        <button className="btn btn-primary" onClick={e => this.save(e)} >
                            Login
                        </button>
                    </div>
                </div>

                <hr/>
                <div className="row">
                    <div className="col">
                        <h6> Não possui conta? Cadastre-se</h6>
                        <a href="/cadastro">
                            <button className="btn btn-secondary">      
                            Cadastre-se                           
                            </button>
                        </a>
                    </div>
                </div>
        </div>
    </div>
        )
    }

    render(){
        return (
            <React.Fragment>    
                <Main>
                    {this.renderForm()}
                </Main>
            </React.Fragment>
            )
    }

}

const mapDispatchToProps={
  postToken
}
const mapStoreToProps=state=>({
  login_loading:state.token.token_loading,
  login_error:state.token.error
})

const aaa = connect(mapStoreToProps,mapDispatchToProps)(Login)

export {aaa as Login}

