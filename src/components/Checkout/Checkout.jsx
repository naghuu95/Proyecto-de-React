import React, { useState,useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Swal from 'sweetalert2'
import firebase from 'firebase'
import { getFirestore } from '../../firebase/config'
import 'firebase/firestore'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'





export const Checkout = () => {

    const {carrito,precioTotal,vaciarCarrito}=useContext(CartContext)

    const [nombre,setNombre]=useState("")

    const [apellido,setApellido]=useState("")

    const [email,setEmail]= useState("")

    const [telefono,setTelefono]=useState(Number)

    const handleSubmit =(e)=>{
        
        e.preventDefault()
        console.log("Nombre:",nombre)
        console.log("Apellido:",apellido)
        console.log("Email:", email)
        console.log("Telefono:",telefono)

        const orden= {
            buyer:{
                nombre,
                apellido,
                email,
                telefono
            },
            item:carrito,
            total_precio: precioTotal(),
            data:firebase.firestore.Timestamp.fromDate(new Date())
        }
        console.log(orden)


 //Hacemos funcion para enciar la orden a firebase

        const db=getFirestore()

        const ordenes = db.collection('ordenes')
    
        ordenes.add(orden)
               .then ((res)=>{
                Swal.fire({
                    icon: 'success',
                    title: 'Perfecto',
                    text: `Su compra a sido realizada con exito, guarde su numero de compra: ${res.id}`,
                    footer: '<a href="">Seguir comprando</a>',
                    willClose: () => {
                        vaciarCarrito()
                      }
                  })
               })
               .finally(()=>{
                console.log ('operacion terminada con exito')
               })

               //actualizamos la cantidad en la base de datos

               carrito.forEach((item)=>{
                const docRef=db.collection('productos').doc(item.id)

                docRef.get()
                      .then((doc)=>{
                        docRef.update({
                            stock: doc.data().stock -item.cantidad
                        })
                        
                      })
               })

    }

   
    

  
    return (


    <div className='bg-secondary'>
        <h3>Terminar compra</h3>

        <Row className='d-flex justify-content-center'>
            <Col md={5}>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" onChange={(e)=> setNombre(e.target.value)} value={nombre} />
                </div>
                <div className="form-group" >
                    <label htmlFor="apellido">Apellido</label>
                        <input type="text" className="form-control" onChange={(e)=> setApellido(e.target.value)} value={apellido}  />
                </div>
                <div className="form-group" >
                    <label htmlFor="email">Email</label>
                        <input type="text" className="form-control" onChange={(e)=> setEmail(e.target.value)} value={email}  />
                </div>
                <div className="form-group">
                    <label htmlFor="telefono">Telfono</label>
                        <input type="text" className="form-control" onChange={(e)=> setTelefono(e.target.value)} value={telefono} />
                </div>

                <button type='text'className='btn btn-success'>Finalizar</button>
                <Link to ='/cart'className='btn btn-dark'>Volver al carrito</Link>
            </form>
            </Col>
        </Row>

    </div>
  )
}
