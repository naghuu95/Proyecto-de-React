import './Item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({id,nombre,precio,imagen,stock})=>{
    
    return(
        <div className='col-3 d-flex justify-content-center  py-4'>
       <Card style={{ width: '18rem' }} className='col-5 ' id='card_producto'>
        <Card.Img variant="top" src={imagen} />
        <Card.Body>
          <Card.Title className='titulo_card'>{nombre}</Card.Title>
          <p> Precio : ${precio}</p>
          <p>Cantidad disponible: {stock} unidades</p>
          
        </Card.Body>
        <footer>
            <Link className='ver_detalle' to={`/Item/${id}`} >Ver detalle </Link>
        </footer>
        </Card>


      </div>
       
    )
}