import './Item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useState,useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Toaster,toast } from 'react-hot-toast';
import {MdOutlineAddCircleOutline} from 'react-icons/md'

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

  const {addToCart}= useContext(CartContext)

  const handleAddToCart = (talle) => {
    addToCart({id, nombre, precio, imagen, talle, cantidad: 1});
    toast.success('Se agregó al carrito')
    
  };


    
    return(
        <div className='col-3 d-flex justify-content-center my-5 py-4 '>
       <Card style={{ width: '17rem' }} className='col-5 card_producto ' >
        
       <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
        <Link to={`/item/${id}`}> <Card.Img variant="top" src={imagen} id='imagen' /></Link> 
          {showTalles && (
            <div className="t">
              <p className=' w-75 d-flex justify-content-evenly'> <MdOutlineAddCircleOutline className='fs-5 '/> Agregar rapido</p>
              <div>
              <Button variant="outline-secondary" className='me-1 b-talles' onClick={() => handleAddToCart('S')}  >S</Button>
              <Button variant="outline-secondary" className='me-1 b-talles'onClick={() => handleAddToCart('M')}>M</Button>
              <Button variant="outline-secondary" className='me-1 b-talles'onClick={() => handleAddToCart('L')}>L</Button>
              <Button variant="outline-secondary" className='me-1 b-talles'onClick={() => handleAddToCart('XL')}>XL</Button>

              </div>
              
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
        <Toaster 
        position='top-center ' 
        toastOptions={{
          className: 'mensaje',
          duration: 1500,
         }}
       
          
         
  
        
        />

      </div>
       
    )
}


//  <Card.Img variant="top" src={imagen} />