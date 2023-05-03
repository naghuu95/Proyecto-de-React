import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export const Checkout = () => {

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
