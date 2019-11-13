import React from 'react'

export default function renderTable({itens, handleClick}){
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
                {Object.keys(itens).map(id =>
                    <tr key={id}>
                        <td>{itens[id].item.nome}</td>
                        <td>
                            <button className="btn btn-warning" onClick={handleClick(id,true,false)}><i className="fa fa-plus-square"></i></button>
                            {itens[id].quantidade}
                            <button className="btn btn-warning" onClick={handleClick(id,false,true)}><i className="fa fa-minus-square"></i></button>
                        </td>
                        <td>{itens[id].valor}</td>
                    </tr>
                
                )}
            </tbody>
        </table>
    )
}
