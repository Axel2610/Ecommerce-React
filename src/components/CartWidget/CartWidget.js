import React from 'react'
import './CartWidget.css'
import {FaShoppingCart} from "react-icons/fa"

export const CartWidget = () =>{
    return(
        <div>
            <FaShoppingCart className="cardWidget"/>
        </div>
    )
}