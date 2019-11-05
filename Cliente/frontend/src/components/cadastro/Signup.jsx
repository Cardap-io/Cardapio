import React, {Component} from 'react'
import axios from 'axios'
import Main from '../template/Main'
import Logo from '../template/Logo'
import Footer from '../template/Footer'

const baseURL = 'http://localhost:3001/users'

const initialState = {
    user: {name: '', email:'', senha:''},
    list:[]
}

export default class SignUp extends Component {

    state = {...initialState}

    updateField(event){ //função para atualizar o campo digitado
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    getUpdatedList(user, add = true){ //função que verifica os dados do db.json
        const list = this.state.list.filter( u => u.id !== user.id)
        if(add) list.unshift(user) //if para add na lista
        return list
    }

    save(){// função que salva no arquino bd.json
        const user = this.state.user
        const method = 'post' //metodo http post
        const url = user.id ? `${baseURL}/${user.id}` : baseURL
        axios[method](url,user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)  //atualiza a lista
                this.setState({user: initialState.user, list})
            })
    }

    renderForm(){ // renderizar o formulario
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
                            <label>Nome</label>
                            <input type="text" className="form-control" name="name" value={this.state.user.name}
                            onChange = {e => this.updateField(e)} placeholder="Nome" />
                        </div>
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
                        <button className="btn btn-primary" type="submit" onClick={e => this.save(e)} >
                            Cadastrar
                        </button>
                    </div>
                </div>
                
                <hr/>
                <div className="row">
                    <div className="col">
                        <a href="/">
                            <button className="btn btn-secondary">      
                            Login                           
                            </button>
                        </a>
                    </div>
                </div>
        </div>
    </div>
        )
    }

    render(){ // rederizar os componentes
        return (
            <React.Fragment>    
                <Main>
                    {this.renderForm()}
                </Main>
                <Footer/>
            </React.Fragment>
            )
    }

}