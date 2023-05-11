
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ItemCount } from '../ItemCount/ItemCount';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import './ItemDetail.css'
import Toastify from 'toastify-js'
import { Toaster,toast } from 'react-hot-toast';



export const ItemDetail = ({id,nombre,precio,imagen,stock,descripcion,categoria})=>{

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
      toast.error('Seleccione un talle y una cantidad mayor que cero para agregar al carrito')
    }
   

  }

  


  const handleTalleClick = (e) => {
    setTalle(e.target.value);
    const talles = document.querySelectorAll(".talle");
    talles.forEach((t) => t.classList.remove("active"));
    e.target.classList.add("active");
  }

    return(

      <Container className='py-5 ' >
       <Row className='d-flex justify-content-evenly  '>
        <Col className='' md={7}>
            <div>
                <img src={imagen} style={{ width: '70%', height: 'auto' }} alt={nombre} />
            </div>
        </Col>

        <Col className='detalle d-flex justify-content-center  ' md={3}>
        <Card style={{ width: '25rem' }} className='col-12  ' id='card_producto'>

        <Card.Body className=' d-flex flex-column justify-content-around align-items-center'>
          <Card.Title>{nombre}</Card.Title>
          <p> Precio : ${precio}</p>
          <p>Cantidad disponible: {stock} unidades</p>
          <p>{descripcion}</p>
         
         <div>
          
           <p >Seleccione talle :</p> 
          <div class="btn-group " role="group" id='talles' aria-label="Basic outlined example">
              <button type="button" className={`talle btn  btn-secondary me-2 ${talle === "S" ? "active" : ""}`} value="S" onClick={handleTalleClick}>S</button>
              <button type="button" className={`talle btn btn-secondary me-2 ${talle === "M" ? "active" : ""}`} value="M" onClick={handleTalleClick}>M</button>
              <button type="button" className={`talle btn btn-secondary me-2 ${talle === "L" ? "active" : ""}`} value="L" onClick={handleTalleClick}>L</button>
              <button type="button" className={`talle btn btn-secondary pe-2 ${talle === "XL" ? "active" : ""}`} value="XL" onClick={handleTalleClick}>XL</button>
          </div>

         </div>
         
          
        </Card.Body>
        <footer>
          <p>Unidades </p>
          
        <ItemCount max={stock} modify={setCantidad} counter={cantidad}/>
        
        
        <button /*variant="outline-secondary"*/ className='botones'  onClick={ sumarAlCarrito}  > Agregar al carrito</button>
        <Link to='/cart'> <button className='botones mt-3' > Ir al carrito</button> </Link>
        
        <Toaster position='top-right' toastOptions={{className: 'mensaje',}}/>
        
        
        </footer>
        </Card>

        </Col>
       </Row>
      
      </Container>







    )
}