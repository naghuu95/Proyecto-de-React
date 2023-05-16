import React, { useState,useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Swal from 'sweetalert2'
import firebase from 'firebase'
import { getFirestore } from '../../firebase/config'
import 'firebase/firestore'
import { Col, Row } from 'react-bootstrap'
import { Link,useNavigate } from 'react-router-dom'
import 'sweetalert2/dist/sweetalert2.min.css';
import './checkout.css'
import {useForm} from 'react-hook-form'





export const Checkout = () => {

    const {carrito,precioTotal,vaciarCarrito}=useContext(CartContext)

    const costoEnvio = precioTotal() >= 15000 ? 0 : 1800;
    

    const totalResumen = () => {
      return precioTotal() + costoEnvio ;
    };

    const{ register, handleSubmit,trigger,reset,formState:{errors}}=useForm()
    const navigate= useNavigate();

   // validar los campos de un formulario cuando el usuario realiza una acción de "blur" o abandono del campo de entrada.
    const handleInputBlur = async (e) => {
        await trigger(e.target.name);
      }
      
   
    
    const onSubmit=(data)=>{

        console.log(data)
        const { nombre, apellido, email, telefono } = data
        
        const orden={
            buyer:{
                nombre,
                apellido,
                email,
                telefono: parseInt(telefono),
            },
            item:carrito,
            total_precio_productos:precioTotal(),
            costo_envio:costoEnvio,
            precio_total_de_la_compra : totalResumen(),
            data:firebase.firestore.Timestamp.fromDate(new Date())
        }

        const db=getFirestore()

        const ordenes = db.collection('ordenes')

        ordenes.add(orden)
               .then ((res)=>{

                   


                Swal.fire({
                  icon: 'success',
                  title: 'Perfecto',
                  text: `Su compra a sido realizada con exito, guarde su numero de compra: ${res.id}, ¿DESEA SEGUIR COMPRANDO? `,
                  showCancelButton: true,
                  confirmButtonText: 'SI',
                  cancelButtonText: 'NO',
                  customClass: {
                    confirmButton: 'my-confirm-button-class',
                    cancelButton: 'my-cancel-button-class',
                  },
                  buttonsStyling: false,

                  willClose: () => {
                    vaciarCarrito()
                    
                  }
            
            
                }).then((result) => {
                  if (result.isConfirmed) {
                    navigate('/productos');
                  } else if (result.dismiss === Swal.DismissReason.cancel) {
                    navigate('/');
                  }
                });


               })
               .finally(()=>{
                console.log ('operacion terminada con exito')
               })

               carrito.forEach((item)=>{
                const docRef=db.collection('productos').doc(item.id)

                docRef.get()
                      .then((doc)=>{
                        docRef.update({
                            stock: doc.data().stock -item.cantidad
                        })
                        
                      })
               })

        reset();

    }

   
  
    return (


      <Row className='container-fluid d-flex justify-content-center py-5 mt-5 '>

        <h3 className='py-3 mt-4'>Resumen de la compra</h3>

       <Col xs={10} md={5} className=' border border-secondary rounded border-2  my-5 mt-5 d-flex flex-column justify-content-around '>

        {
           carrito.map((prod)=>(
           <>
           <Row className=' fila d-flex justify-content-center align-items-center '>

            <Col md={2} >
            <img width={50} src={prod.imagen} alt={prod.nombre} />
            
            </Col>

            <Col md={2}>
             {prod.nombre}
            </Col>

            <Col md={2}>
            {prod.cantidad} unidades
            </Col>

            <Col md={2}>
              {prod.talle}
            </Col>

            <Col md={2}>
             $ {prod.precio}
            </Col>
               

            
           </Row>


           
        </>
        ))
       }
         
        <Row className='bg-dark container mx-1 '>
         <Col md={8} className='precio-total'>Total de la compra  </Col>
         <Col md={4} className=' precio-total'>$ {precioTotal()}</Col>
        </Row>


       <Row className='bg-dark container mx-1'>
         <Col md={8}>Costo de envío:</Col>
         <Col md={4}>$ {costoEnvio}</Col>
       </Row>
       

       <Row className=' bg-dark container mx-1'>
         <Col md={8} className='precio-total'>Total final de la compra </Col>
         <Col md={4} className=' precio-total'>$ {totalResumen()}</Col>
        </Row>

       
            
            


       </Col>



        <Col xs={10} md={6} className='py-5 my-5 '>
         
         
         <div className=' compra d-flex flex-column justify-content-center align-items-center '>
          
        
         
         <form onSubmit={handleSubmit(onSubmit)} className='formulario'>
           <div className='campos'>
             <label htmlFor=""> Nombre</label>
             <input type="text" onBlur={handleInputBlur}  {...register('nombre',{
                    required:true,
                    maxLength: 25,
                    minLength: 3,
         
             })}  />
              
              {errors.nombre?.type=== 'required'&& <p className='error'>El campo nombre es requerido</p>}
              {errors.nombre?.type=== 'maxLength'&& <p className='error'>El numero de caracteres debe estar entre 3 y 25 digitos</p>}
              {errors.nombre?.type=== 'minLength'&& <p className='error'>El numero de caracteres debe estar entre 3 y 25 digitos</p>}
           </div>
         
           <div className='campos'>
             <label htmlFor="">Apellido</label>
             <input type="text" onBlur={handleInputBlur} {...register('apellido',{
                    required:true,
                    maxLength: 25,
                    minLength: 3,
         
             })}/>
         
              {errors.apellido?.type=== 'required'&& <p className='error'>El campo apellido es requerido</p>}
              {errors.apellido?.type=== 'maxLength'&& <p className='error'>El numero de caracteres debe estar entre 3 y 25 digitos</p>}
              {errors.apellido?.type=== 'minLength'&& <p className='error'>El numero de caracteres debe estar entre 3 y 25 digitos</p>}
           </div>
         
           <div className='campos'>
             <label htmlFor="">Email</label>
             <input type="text" onBlur={handleInputBlur} {...register('email',{
                required:true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                
         
         
             })} />
         
             {errors.email?.type=== 'required'&& <p className='error'>El campo email es requerido</p>}
             {errors.email?.type=== 'pattern'&& <p className='error'>El formato del email es incorrecto </p>}
         
           </div>
         
           <div className='campos '>
             <label htmlFor="">Telefono</label>
             <input type="number" onBlur={handleInputBlur} {...register('telefono',{
               required:true,
               maxLength: 13,
               minLength: 9,
               
               
             })} />
         
             {errors.telefono?.type=== 'required'&& <p className='error'>El campo telefono es requerido</p>}
             {errors.telefono?.type=== 'maxLength'&& <p className='error'>El numero debe estar entre 9 y 13 digitos</p>}
             {errors.telefono?.type=== 'minLength'&& <p className='error'>El numero debe estar entre 9 y 13 digitos</p>}
             
           </div>
         
           <div className='row'>
            <button type='submit' className='botones'/*onClick={() => reset()}*/ >Realizar compra</button>
             <Link to='/cart' className='botones text-decoration-none col-12 mt-4'>Volver al carrito</Link>
           </div>
         
          </form>
         
              </div>
         
        </Col>

      </Row>  

    )
  
} 


