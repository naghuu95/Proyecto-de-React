import './Item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export const Item = ({id,nombre,precio,imagen})=>{

  //cree un estado para que aparescan los talles en la imagen del producto
   // handleMouseHover va a mostrar los el grupo de botones de talles cuando pase el mouse sobre la imagen  y
   // handleMouseLeave no los va a mostrar cuando saque el cursor de la imagen 
  const [showTalles, setShowTalles] = useState(false);

  const handleMouseOver = () => {
    setShowTalles(true);
  };

  const handleMouseLeave = () => {
    setShowTalles(false);
  };


    
    return(
        <div className='col-3 d-flex justify-content-center my-5 py-4'>
       <Card style={{ width: '15rem' }} className='col-5 ' id='card_producto'>
        
       <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
          <Card.Img variant="top" src={imagen} id='imagen' />
          {showTalles && (
            <div className="t">
              
              <Button variant="outline-secondary" className='me-1'>S</Button>
              <Button variant="outline-secondary" className='me-1'>M</Button>
              <Button variant="outline-secondary" className='me-1'>L</Button>
              <Button variant="outline-secondary" className='me-1'>XL</Button>
            </div>
          )}
        </div>
       
       
       

        <Card.Body>
          <Card.Title className='pt-3' id='titulo_card'>{nombre}</Card.Title>
          <p className='precio pt-3'> ${precio}</p>
         
          
        </Card.Body>
        <footer>
            <Link className='ver_detalle' to={`/Item/${id}`} >Ver detalle </Link>
        </footer>
        </Card>


      </div>
       
    )
}


//  <Card.Img variant="top" src={imagen} />