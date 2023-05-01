import cart from './assets/carrito.svg';
import './cartWidget.css';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';


export const CartWidget = () => {

  const {calcularCantidad}= useContext(CartContext)

  return (
    <div class="caja_carrito">
      
        <img class="carrito" src={cart} alt="Carrito de compras" />
        <span >{calcularCantidad()}</span>
    </div>
  )
}
