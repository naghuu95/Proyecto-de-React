import React, { useContext } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import './Cart.css'
import { CartContext } from '../context/CartContext'



export const Cart = () => {
   
    const {carrito,precioTotal,removerItem,vaciarCarrito}= useContext(CartContext)

  return (
    <div className='container d-flex flex-column aling-item-center justify-content-center'>
        <h1 className='fila py-5'>Resumen de compra</h1>
        <Row className=' container d-flex fila justify-content-center bg-dark py-2'>
            
            <Col md={2}>Producto</Col>
            <Col md={2}>Cantidad</Col>
            <Col md={2}>Precio</Col>
        </Row>
     {
        carrito.map((prod)=>(
        <>
           <Row className=' fila d-flex justify-content-center align-items-center  pt-5'>

            <Col md={2} >
            <img width={150} src={prod.imagen} alt={prod.nombre} />
            
            </Col>

            <Col md={2}>
             {prod.nombre}
            </Col>

            <Col md={2}>
            {prod.cantidad} unidades
            </Col>

            <Col md={2}>
             $ {prod.precio}
            </Col>

            <Col md={2}>
             <Button onClick={()=> removerItem(prod.id)}>
                Eliminar
             </Button>
            </Col>

            </Row>
        </>
        ))
      }


        <Row className='fila my-5 py-2 d-flex justify-content-around bg-dark'>
            <Col md={4} className='fs-4 precio-total'>Precio total </Col>
            <Col md={3} className='fs-4 precio-total'>$ {precioTotal()}</Col>
            <Col md={3}> <Button onClick={vaciarCarrito}>Vaciar Carrito</Button></Col>
        </Row>
     


    </div>
  )
}
