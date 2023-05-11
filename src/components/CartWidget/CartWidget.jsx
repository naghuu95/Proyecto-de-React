
import './cartWidget.css';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import {HiOutlineShoppingBag} from 'react-icons/hi'


export const CartWidget = () => {

  const {calcularCantidad}= useContext(CartContext)

  return (
   
    <div class="d-flex justify-content-center align-items-center  caja-carrito">
     
      <div  className='position-relative '>
      <HiOutlineShoppingBag className='fs-4 carrito'/>
      <span class="circulo position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" >
      {calcularCantidad()}
      <span class="visually-hidden" >{calcularCantidad()}</span>
      </span>
      </div>
   
    </div>
  )
}
