import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = ({id, name, img, desc, price, category, stock}) => {

    const navigate = useNavigate()
    
    const [cantidad, setCantidad] = useState(0)
    const [agregado, setAgregado] = useState(false)
    
    const handleVolver = () => {
        navigate(-1)
    }

    const handleVolverInicio = () => {
        navigate('/')
    }

    const handleAgregar = () => {
        if (cantidad > 0) {
            console.log('Item agregado:', {
                id,
                name,
                price,
                cantidad
            })
        
            setAgregado(true)
        }   
    }

    return (
        <div className="container-fluid row align-items-center">
            <h2 className="text-center">{name}</h2>
            <img src={img} alt={name} className="col-7"/>
            <p className="col-5"> <b>Caracteristicas:</b> <br/><br/><br/> {desc}</p>
            <h5 className="text-center">Precio: ${price}</h5>

            {
                !agregado 
                ?   <ItemCount className="justify-content-center"
                        max={stock} 
                        cantidad={cantidad} 
                        setCantidad={setCantidad}
                        onAdd={handleAgregar}
                    />
                :   <Link to="/cart" className="btn btn-success d-block">Terminar mi compra</Link>
            }

            <button className="btn btn-primary" onClick={handleVolver}>Volver</button>
            <button className="btn btn-outline-primary" onClick={handleVolverInicio}>Volver al inicio</button>
        </div>
    )
}