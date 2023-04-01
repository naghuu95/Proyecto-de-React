import cart from './assets/carrito.svg';
import './cartWidget.css';


export const CartWidget = () => {
  return (
    <div class="caja_carrito">
      
        <img class="carrito" src={cart} alt="Carrito de compras" />
        0
    </div>
  )
}
