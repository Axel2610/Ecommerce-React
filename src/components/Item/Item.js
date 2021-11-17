import React from 'react'

export const Item = ({id, name, img, descrip, price, stock}) => {

    return (
        <article key={id} className="card m-2" style={{width: "15rem"}}>
            <img src={img} alt={name} className="card-img-top"/>
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className="card-text">Precio: ${price}</p>
                <p className="card-text">{descrip}</p>
                <p className="text-muted">Stock: {stock}</p>
                <button className="btn btn-primary">Ver detalles</button>
            </div>
        </article>
    )
}