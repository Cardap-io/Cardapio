import React,{Component} from 'react'
//import axios from 'axios'
import Main from '../template/Main'

//const baseURL = 'http://localhost:3001/cardapio'

export default class Produto extends Component{
    constructor(){
        super()
        this.state = {
            ID:'',
            Nome_do_item: '',
            Descricao: '',
            Preco: '',
            descricao:'',
            pic:''
        }
    }

    /*componentDidMount(){
        this.props.get
    }
*/

render(){
    return(
    <Main>
        <h1>Produto</h1>
    </Main>
    )}

}