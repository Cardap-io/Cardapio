import React, {Component} from 'react'
import Main from '../template/Main'
import Logo from '../template/Logo'
import { connect } from 'react-redux'
import { signin } from '../../redux/action/cadastroAction'
import jumpTo from '../../services/navigation'


const initialState = {

}

class Signup extends Component {

    constructor(props){
        super(props)
        this.state ={
            user:{nome:'',sobrenome:'',telefone:'',cpf:'',data_nasc:'',email:'',senha:''}
        }
    }

    updateField(event){ //função para atualizar o campo digitado
        const user = {...this.state.user}
        user[event.target.name] = event.target.value
        this.setState({user})
    }

    save(event){
        if( this.state.user.nome===""||
            this.state.user.sobrenome===""||
            this.state.user.telefone===""||
            this.state.user.cpf===""||
            this.state.user.data_nasc===""||
            this.state.user.email===""||
            this.state.user.senha===""){
            event.preventDefault()
            alert("Há campos vazios")
        }else{
        this.props.signin(this.state.user.nome,this.state.user.sobrenome,this.state.user.telefone,
            this.state.user.cpf,this.state.user.data_nasc,this.state.user.email,this.state.user.senha)
            .then( res => {
            jumpTo('/login')
        })
        }
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
                            <input type="text" className="form-control" name="nome" value={this.state.user.nome}
                            onChange = {e => this.updateField(e)} placeholder="Nome" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label>Sobrenome</label>
                            <input type="text" className="form-control" name="sobrenome" value={this.state.user.sobrenome}
                            onChange = {e => this.updateField(e)} placeholder="Sobrenome" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label>Telefone</label>
                            <input type="text" className="form-control" name="telefone" value={this.state.user.telefone}
                            onChange = {e => this.updateField(e)} placeholder="Telefone" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label>CPF</label>
                            <input type="text" className="form-control" name="cpf" value={this.state.user.cpf}
                            onChange = {e => this.updateField(e)} placeholder="CPF" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label>Data de Nascimento</label>
                            <input type="date" className="form-control" name="data_nasc" value={this.state.user.data_nasc}
                            onChange = {e => this.updateField(e)} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label>E-mail</label>
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
                        <button className="btn btn-primary" type="submit" onClick={e =>this.save(e)} >
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
            </React.Fragment>
            )
    }

}
const mapDispatchToProps ={
    signin
    // : ({nome,email,senha}) => {dispatch(signin({nome,email,senha}))}
  }

const aaa = connect(null , mapDispatchToProps)(Signup)

export {aaa as Signup}