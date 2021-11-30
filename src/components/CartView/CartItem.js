import React, { useContext } from 'react'
import { BsFillTrashFill } from 'react-icons/bs'
import { CartContext } from '../../context/CartContext'
import './CartItem.css'

export const CartItem = ({name, price, cantidad, img, id}) => {

    const {removerDelCarrito} = useContext(CartContext)

    return (
        <div className="card mx-3 cartasCartView" style={{ width: '14rem'}}>
            <img src={img} alt={name} className="card-img-top"/>
            <h3 className="card-text text-center">{name}</h3>
            <p className="card-text text-center">Precio: <b>${price}</b></p>
            <p className="card-text text-center">Cantidad: {cantidad}</p>
            
            <button 
                className="btn btn-danger my-3"
                onClick={() => { removerDelCarrito(id) }}>
            
                <BsFillTrashFill/>
            </button>
        </div>
    )
}