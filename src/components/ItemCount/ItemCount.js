
import React, {useState} from 'react'
import './ItemCount.css'

export const ItemCount = () =>{

    const [cantidadProducto, modificarProducto] = useState(1)

    const [advertenciaStock, alertaStock] = useState("")


    const stockDisponible = 5


    const sumarProducto = () =>{
        modificarProducto(cantidadProducto + 1)

        if (cantidadProducto >= stockDisponible){
            modificarProducto(cantidadProducto + 0)
            alertaStock("Cantidad Maxima")

        } else if (cantidadProducto < 5){
            alertaStock("")
        }
    }
    const restarProducto = () =>{
        modificarProducto(cantidadProducto - 1 )
        
        if (cantidadProducto <= 0){
            modificarProducto(cantidadProducto - 0)
            alertaStock("Agregue al menos un producto")

        } else if (cantidadProducto > 0 ){
            alertaStock("")
        }
    }



    return(
        <div className="contenedorItemCount">
            <h5>Producto</h5>
            <div className="contenedorBotones">
                <button className="btn btn-dark" onClick={restarProducto}>-</button>
                <p>{cantidadProducto}</p>
                <button className="btn btn-dark" onClick={sumarProducto}>+</button>
               </div>
             <p className="advertencia">{advertenciaStock}</p>
        </div>
    )
}