
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ItemCount } from '../ItemCount/ItemCount';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';


export const ItemDetail = ({id,nombre,precio,imagen,stock,descripcion,categoria})=>{

  const {addToCart}= useContext(CartContext)
    
  const[cantidad,setCantidad]= useState(0)

  const sumarAlCarrito=()=>{
    const newItem ={
      id,
      imagen,
      nombre,
      descripcion,
      categoria,
      cantidad,
      precio
    }
    console.log(newItem);
    addToCart(newItem)
  }

    return(

      <Container >
       <Row>
        <Col className='' md={7}>
            <div>
                <img src={imagen} style={{ width: '70%', height: 'auto' }} alt={nombre} />
            </div>
        </Col>
        <Col className=' d-flex justify-content-center mt-4' md={5}>
        <Card style={{ width: '25rem' }} className='col-12  ' id='card_producto'>

        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <p> Precio : ${precio}</p>
          <p>Cantidad disponible: {stock} unidades</p>
          <p>{descripcion}</p>
          
        </Card.Body>
        <footer>
          <p>Unidades </p>
        <ItemCount max={stock} modify={setCantidad} counter={cantidad}/>
        
        <Button variant="outline-secondary" className='mt-3' onClick={sumarAlCarrito}  > Agregar al carrito</Button>
        <Link to='/cart'> <Button> Ir al carrito</Button> </Link>
        
        </footer>
        </Card>

        </Col>
       </Row>
      
      </Container>






       /* <div className='col-5 py-4 my-5 bg-warning '>

            <div className='col-5'>  </div>
       <Card style={{ width: '25rem' }} className='col-10 ' id='card_producto'>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <p> Precio : ${precio}</p>
          <p>Cantidad disponible: {stock} unidades</p>
          
        </Card.Body>
        <footer>
            <ItemCount/>
            
        </footer>
        </Card>


      </div>*/
       

    )
}