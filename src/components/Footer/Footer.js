import React from 'react'
import './Footer.css'
import {BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs'

export const Footer = () => {
    return (
        <footer className='container-fluid'>
            <div >
                <ul>
                    <li><BsFacebook/></li>
                    <li><BsInstagram/></li>
                    <li><BsWhatsapp/></li>
                </ul>
            </div>
        </footer>
    )
}
