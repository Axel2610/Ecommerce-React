import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'


export const ItemDetail = ({id, name, img, desc, price, category, stock}) => {

    const navigate = useNavigate()

    const {agregarAlCarrito, isInCart} = useContext(CartContext)
    
    const [cantidad, setCantidad] = useState(0)


    const handleVolver = () => {
        navigate(-1)
    }

    const handleVolverInicio = () => {
        navigate('/')
    }

    const handleAgregar = () => {
        if (cantidad > 0) {
          agregarAlCarrito({
              id,
              name,
              price,
              img,
              cantidad
          })
        }   
    }

    return (
        <div className="container-fluid row align-items-center">
            <h2 className="text-center">{name}</h2>
            <img src={img} alt={name} className="col-7"/>
            <p className="col-5"> <b>Caracteristicas:</b> <br/><br/><br/> {desc}</p>
            <h5 className="text-center">Precio: ${price}</h5>

            {
                !isInCart(id)
                ? <ItemCount
                        max={stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        onAdd={handleAgregar}
                        />
                :   <Link to="/cart" className="btn btn-success d-block my-2">Terminar mi compra</Link>
            }

            <button className="btn btn-primary my-2" onClick={handleVolver}>Volver</button>
            <button className="btn btn-outline-primary my-2" onClick={handleVolverInicio}>Volver al inicio</button>
        </div>
    )
}