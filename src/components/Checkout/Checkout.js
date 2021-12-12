import React, { useContext, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { validarDatos } from '../../helpers/validarDatos'
import { collection, Timestamp, addDoc, getDoc, updateDoc, doc, writeBatch, query, where, documentId, getDocs} from 'firebase/firestore/lite'
import {db} from '../../firebase/config'
import Swal from 'sweetalert2'


export const Checkout = () => {

    const {carrito, totalCompra, vaciarCarrito} = useContext(CartContext)

    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        email: '',
        emailConfirm: '',
        telefono: ''
    })

    const handleInputChange = (e) =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
 
    const handleSubmit = async (e) => {
        
        e.preventDefault()

        if(!validarDatos(values)) {return}

        const orden ={
            buyer:{...values},
            items: carrito,
            total: totalCompra(),
            date: Timestamp.fromDate(new Date())
            }
        

        const batch = writeBatch(db)
        
        const ordersRef = collection(db, 'orders')
        const prodRef = collection(db,'productos')


        const q = query(prodRef ,where(documentId(), 'in', carrito.map(el => el.id)))

        const outOfStock = []

        const productos = await getDocs(q)

        productos.docs.forEach((doc)=>{
            const itemtoUpdate = carrito.find((prod)=> prod.id === doc.id)

            if(doc.data().stock >= itemtoUpdate.cantidad){
                batch.update(doc.ref,{
                    stock: doc.data().stock - itemtoUpdate.cantidad
                })
            }else{
                outOfStock.push(itemtoUpdate)
            }
        })

        if(outOfStock.length === 0){
            addDoc(ordersRef, orden)
            .then((res) =>{
                batch.commit()
                Swal.fire({
                    icon: 'success',
                    title: 'Orden Recibida',
                    text: `Su numero de orden es ${res.id}`
                })
                vaciarCarrito()
            })
        }else {
           Swal.fire({
               icon: 'error',
               title: 'No hay stock de',
               text: outOfStock.map(el=> el.name).join(', ')
           })
        }


        carrito.forEach((prod)=> {
            const docRef = doc(prodRef, prod.id)
            getDoc(docRef)
            .then((doc) =>{
                updateDoc(docRef,{
                    stock: doc.data().stock - prod.cantidad
                })
            } )
        })







    }


    return (

        <>
        {carrito.length === 0 && <Navigate to="/"/>}
            <div className='m-5'>
                <h2>Resumen de compra</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        name="nombre"
                        value={values.nombre}
                        className="form-control my-3"
                        type="text"
                        placeholder="Nombre"
                        onChange={handleInputChange}
                    />
                    {values.nombre.length < 3 && <span>Nombre Invalido</span>}

                    <input
                        name="apellido"
                        value={values.apellido}
                        className="form-control my-3"
                        type="text"
                        placeholder="Apellido"
                        onChange={handleInputChange}
                    />
                    {values.apellido.length < 3 && <span>Apellido Invalido</span>}

                    <input
                        name="email"
                        value={values.email}
                        className="form-control my-3"
                        type="email"
                        placeholder="Email"
                        onChange={handleInputChange}
                    />
                    {values.email.length < 5 && <span>Email Invalido</span>}

                    <input
                        name="emailConfirm"
                        value={values.emailConfirm}
                        className="form-control my-3"
                        type="email"
                        placeholder="Reingrese Email"
                        onChange={handleInputChange}
                    />
                    {values.emailConfirm !== values.email && <span>Reingrese el mismo Email</span>}

                    <input
                        name="telefono"
                        value={values.telefono}
                        className="form-control my-3"
                        type="text"
                        placeholder="Nro de Telefono"
                        onChange={handleInputChange}
                    />
                    {values.telefono < 6 && <span>Numero de telefono demasiado corto</span>}

                    <button className='btn btn-success' onClick={handleSubmit}>Enviar</button>
                </form>    
            </div>
        
    </>
    )
}