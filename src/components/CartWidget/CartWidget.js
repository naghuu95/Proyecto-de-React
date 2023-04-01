import cart from './assets/carrito.svg';
import './cartWidget.css';


export const CartWidget = () => {
  return (
    <div>
      
        <img className="carrito" src={cart} alt="Carrito de compras" />
        0
    </div>
  )
}
