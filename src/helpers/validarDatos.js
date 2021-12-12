import Swal from "sweetalert2"


export const validarDatos = (values) =>{
    
    if(values.nombre.length < 3){
        Swal.fire({
            icon: 'error',
            title: 'Nombre Invalido'
        })
        return false
    }
    
    if(values.apellido.length < 3){
        Swal.fire({
            icon: 'error',
            title: 'Apellido Invalido'
        })
        return false
    }


    if(values.email.length < 5){
        Swal.fire({
            icon:'error',
            title: 'Email invalido'
        })
        return false
    }

    if(values.emailConfirm !== values.email){
        Swal.fire({
            icon:'warning',
            title:'Los emails no coinciden'
        })
        return false
    }
    
    if(values.telefono.length < 6){
        Swal.fire({
            icon:'error',
            title:'Ingrese un numero valido'
        })
        return false
    }


    return true
}