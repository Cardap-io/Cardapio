import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'
import Logo from '../template/Logo'

const baseURL = 'http://localhost:3001/users'

const initialState = {
    user: {email:'', senha:''},
    list:[]
}

export default class Login extends Component {

    state = {...initialState}


    updateField(event){
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    save(){
        const user = this.state.user
        const method = 'post'
        const url = user.id ? `${baseURL}/${user.id}` : baseURL
        axios[method](url,user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data) 
                this.setState({user: initialState.user, list})
            })
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
                        <a href="/signup">
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