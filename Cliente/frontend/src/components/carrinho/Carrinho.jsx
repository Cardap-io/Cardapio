import React from 'react'
import jumpTo from '../../services/navigation'


function renderTable(itens){
    return(
        <table className="striped bordered">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                </tr>
            </thead>
            <tbody>
                {Object.key(itens).map(id => {
                    <tr key={id}>
                        <td>{itens[id].item.nome}</td>
                        <td>
                            <button className="btn btn-warning" onClick={handleClick(id,true,false)}><i className="fa fa-plus-square"></i></button>
                            {itens[id].quantidade}
                            <button className="btn btn-warning" onClick={handleClick(id,false,true)}><i className="fa fa-minus-square"></i></button>
                        </td>
                        <td>{itens[id].valor}</td>
                    </tr>
                }
                )}
            </tbody>
        </table>
    )
}

export default function Carrinho(props){
    const {preco, itens} = props.carrinho
    const {postCart} = props
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <h4>Carrinho</h4>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    {renderTable(itens)}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    Total: R$ {preco}
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <button onClick={() => jumpTo('/finalizar')}>
                        Finalizar compra
                    </button>
                </div>
            </div>
        </div>
    )
}
