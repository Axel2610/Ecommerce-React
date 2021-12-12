import React, { useContext } from 'react'
import './CartWidget.css'
import {FaShoppingCart} from "react-icons/fa"
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export const CartWidget = () =>{

    const {totalCantidad, carrito} = useContext(CartContext)

    return(

        <div className={ carrito.length === 0 ? "widget hidden" : "widget"}>
            <Link to='/cart'>
                <FaShoppingCart className="cartWidget"/>
                <span className="spanCarrito">{totalCantidad()}</span>
            </Link>
            
        </div>
    )
}