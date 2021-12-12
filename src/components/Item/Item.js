import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

export const Item = ({id, name, img, minDesc, price,}) => {

    return (
        <article key={id} className="card m-3 carta" style={{width: "18rem"}}>
            <img src={img} alt={name}/>
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">Precio: ${price}</p>
                <p className="card-text">{minDesc}</p>
                <Link to={`/detail/${id}`} className="btn boton">Ver detalles</Link>
            </div>
        </article>
    )
}