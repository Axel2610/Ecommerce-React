import React from 'react'
import './NavBar.css'
import { CartWidget } from '../CartWidget/CartWidget'
import {BsShop} from 'react-icons/bs'


export const NavBar = () =>{
    return(
    <header>
        <BsShop className="iconoHeader"/>
        <ul>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contacto</li>
        </ul>
        <CartWidget/>
        <button className="botonUsuario">Usuario</button>
    </header>
    
    )
}