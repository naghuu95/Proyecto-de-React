import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import './Cart.css'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import { ItemCount } from '../ItemCount/ItemCount'



export const Cart = () => {
   
    const {carrito,precioTotal,removerItem,vaciarCarrito}= useContext(CartContext)

   

   return (
    <div className='container d-flex flex-column aling-item-center justify-content-center'>

      {
        carrito.length === 0 
        ?
        <>

        <div className='carrito_vacio'>
         <h3>Carrito vacio</h3>
         <Link to='/'><button className='botones mt-5 '>Volver a comprar</button></Link> 
        </div>
       
        </>
        :
        <>
           <h1 className='fila py-5'>Carrito de compras</h1>
           <Row className=' container d-flex fila justify-content-center bg-dark py-2'>
            
            <Col md={2}>Producto</Col>
            <Col md={2}>Talle</Col>
            <Col md={2}>Cantidad</Col>
            <Col md={2}>Precio Unitario</Col>
            
            
            
            
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
              {prod.talle}
            </Col>

            <Col md={2}>
            {prod.cantidad} unidades   x
            </Col>


            <Col md={2}>
             $ {prod.precio}
            </Col>

            <Col md={2}>
             <button className='botones' onClick={()=> removerItem(prod)}>
                Eliminar                
             </button>
            </Col>

           </Row>
           
        </>
        ))
       }


        <Row className='fila my-5 py-5 d-flex justify-content-center align-items-center '>
            <Col md={3} className='bg-dar precio-total'>Precio total  </Col>
            <Col md={3} className='bg-primar precio-total'>$ {precioTotal()}</Col>
            <Col md={3} className='bg-succes'><button className='botones' onClick={vaciarCarrito}>Vaciar Carrito</button></Col>
            <Link to='/checkout' > <button className='botones mt-5'> Terminar compra  </button>   </Link>
        </Row>


       
        </>
      }
    
     


    </div>

    
       
  )
}
