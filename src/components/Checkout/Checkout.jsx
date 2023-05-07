import React, { useState,useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Swal from 'sweetalert2'
import firebase from 'firebase'
import { getFirestore } from '../../firebase/config'
import 'firebase/firestore'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './checkout.css'





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


    <div className=' compra'>
        <h3 className='mb-5 pb-3'>Terminar compra</h3>

        <Row className='d-flex justify-content-center '>
            <Col md={5}>
            <form onSubmit={handleSubmit}>
                <div className="form-group py-4">
                    <label htmlFor="nombre"></label>
                        <input type="text" className="form-control" placeholder="Nombre" required onChange={(e)=> setNombre(e.target.value)} value={nombre} />
                       
                </div>
                <div className="form-group py-4" >
                    <label htmlFor="apellido"></label>
                        <input type="text" className="form-control" placeholder="Apellido" required onChange={(e)=> setApellido(e.target.value)} value={apellido}  />
                </div>
                <div className="form-group py-4" >
                    <label htmlFor="email"></label>
                        <input type="email" className="form-control" placeholder="Email" required onChange={(e)=> setEmail(e.target.value)} value={email}  />
                </div>
                <div className="form-group py-4">
                    <label htmlFor="telefono"></label>
                        <input type="tel" class="form-control" id="phone" placeholder="Ingresa tu teléfono" pattern="[0-9]{10}" required onChange={(e)=> setTelefono(e.target.value)} value={telefono}></input>

                        <small class="form-text text-muted">Ingresa un número de teléfono de 10 dígitos</small>
                </div>


                <div className=' row'>
                     <button type='text col-1'className='botones' type="submit"  >Finalizar</button>
                     <Link to ='/cart'className='botones text-decoration-none col-12 mt-4'>Volver al carrito</Link>
                </div>
               
            </form>
            </Col>
        </Row>

    </div>
  )
}
