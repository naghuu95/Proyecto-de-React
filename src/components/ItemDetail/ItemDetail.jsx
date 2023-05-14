
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ItemCount } from '../ItemCount/ItemCount';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion  from 'react-bootstrap/Accordion';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './ItemDetail.css'
import { Toaster,toast } from 'react-hot-toast';
import {RiShoppingBag3Line} from 'react-icons/ri'
import{TbTruckReturn} from 'react-icons/tb'



export const ItemDetail = ({id,nombre,precio,imagen,imagen2,imagen3,stock,descripcion,categoria})=>{

  const {addToCart}= useContext(CartContext)
    
  const[cantidad,setCantidad]= useState(1)
  const[talle,setTalle]= useState("")

 

  const sumarAlCarrito=()=>{
    if (talle){

      const newItem ={
        id,
        imagen,
        nombre,
        descripcion,
        categoria,
        cantidad,
        precio,
        talle
      }
      console.log(newItem);
      addToCart(newItem)
      toast.success('Se agrego al carrito')

    }
    else{
      toast.error('Seleccione un talle y una cantidad  para agregar al carrito')
    }
   

  }

  


  const handleTalleClick = (e) => {
    setTalle(e.target.value);
    const talles = document.querySelectorAll(".talle");
    talles.forEach((t) => t.classList.remove("active"));
    e.target.classList.add("active");
  }

    return(

          <div className=' py-5 bg-dark row d-flex justify-content-evenly'>

            <Col md={5} className=' d-flex flex-column justify-content-center'> 
            <Row className=' d-flex justify-content-evenly'>
             <Col md={6} className=' p-2'> <img src={imagen2} alt={nombre}style={{ width: '100%', height: 'auto' }} /></Col>
             <Col md={6} className=' p-2'><img src={imagen3} alt={nombre} style={{ width: '100%', height: 'auto' }}/></Col>
            
            </Row>



            <Row >
              <Col md={12} className=' p-2'> <img src={imagen} alt={nombre}style={{ width: '100%', height: 'auto' }} /></Col>

            </Row>
            </Col>

          



           <Col md={4} className=' py-5'>
           <Row className=''>
            <Col md={9} className=' text-start  '>
              <h4 className=' fw-bold pb-3'>{nombre}</h4>
              <p >Flux men </p>
              <p> Remera fit</p>
              <p>unidades existentes : {stock}</p>
            </Col>
            <Col md={3} className=' fs-5 fw-bold'> $ {precio}</Col>
           </Row>


           <Row className=' my-5 '>

            <Col md={8}>

            <p className=' fw-bold'>selecciona el talle</p>
   
            <div class="btn-group  w-100" role="group" id='talles' aria-label="Basic outlined example">
              <button type="button" className={`talle btn  btn-secondary me-2  ${talle === "S" ? "active" : ""}`} value="S" onClick={handleTalleClick}>S</button>
              <button type="button" className={`talle btn btn-secondary me-2  ${talle === "M" ? "active" : ""}`} value="M" onClick={handleTalleClick}>M</button>
              <button type="button" className={`talle btn btn-secondary me-2  ${talle === "L" ? "active" : ""}`} value="L" onClick={handleTalleClick}>L</button>
              <button type="button" className={`talle btn btn-secondary pe-2  ${talle === "XL" ? "active" : ""}`} value="XL" onClick={handleTalleClick}>XL</button>
            </div>
            
            </Col>

            <Col md={4} className=' d-flex flex-column justify-content-center align-items-end'>
            <p>unidades</p>
            <ItemCount max={stock} modify={setCantidad} counter={cantidad}/>

            </Col>
           </Row>


           <Row className='d-flex justify-content-center py-5'>
            <Col md={11}>
            <button variant="outline-secondary" className='botones py-3 w-100'  onClick={ sumarAlCarrito}  > Agregar al carrito</button>
            <Link to='/cart'> <button className='botones mt-3 w-100 py-3' > Ir al carrito</button> </Link>
            <Toaster position='top-center' toastOptions={{className: 'mensaje',}}/>
            </Col>
           
           </Row>


           <Row className='py-5 text-center'>
            <p className='fw-bold'>Entrega a su puerta</p> 
            <Row className='py-4'> 
              <Col md={2} className='fs-2'><TbTruckReturn/></Col>
              <Col md={10} className=' pt-3 '><p className=''>¡Politica de devolucion gratuita de 30 dias</p></Col>
              
            </Row>

            <Row className='py-3'>
              <Col md={2} className='fs-2'><RiShoppingBag3Line/></Col>
              <Col md={10} className='pt-3'><p>Entrega estandar gratuita a partir de los $ 15.000</p></Col>
              
            </Row>
              
           </Row>


           <Row > 
           <Accordion className='acordion'>
                <Accordion.Item className='my-acordion'  eventKey="0">
                  <Accordion.Header className='my-acordion-header'>Descripcion</Accordion.Header>
                  <Accordion.Body className='my-acordion-header'>
                  {descripcion}
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1"className='my-acordion'  >
                  <Accordion.Header>Entregas y devoluciones</Accordion.Header>
                  <Accordion.Body>
                    Entrega estandar gratuita a partir de los $ 20.000
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
           </Row>


           
           
           
           </Col>




          </div>
       


    )
}