
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { ItemCount } from '../ItemCount/ItemCount';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export const ItemDetail = ({id,nombre,precio,imagen,stock,descripcion})=>{
    
    



    return(

      <Container >
       <Row>
        <Col className='' md={7}>
            <div>
                <img src={imagen} style={{ width: '70%', height: 'auto' }} alt={nombre} />
            </div>
        </Col>
        <Col className=' d-flex justify-content-center ' md={5}>
        <Card style={{ width: '25rem' }} className='col-12  ' id='card_producto'>

        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <p> Precio : ${precio}</p>
          <p>Cantidad disponible: {stock} unidades</p>
          <p>{descripcion}</p>
          
        </Card.Body>
        <footer>
        <ItemCount initial={1} stock={10} onAdd={(cantidad)=>console.log('cantidad agregada',cantidad)}/>
            
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