import './ItemCount.css'
import { useState } from 'react'

 export const ItemCount= ({stock, inicial, onAdd})=>{
    const[cantidad,setCantidad]= useState(inicial)
   
   

    const incrementar =() => {
        if(cantidad < stock){ 
            setCantidad (cantidad + 1)
        }   
     }

     const decrementar =() => {
        if (cantidad > 1){
            setCantidad (cantidad - 1)
        }
     }
     console.log(onAdd)

     return (
        <div className='Contador'>
            <div className='Controles'>
                <button className='Boton' onClick={decrementar}>-</button>
                <h4 className='Numero'>{cantidad}</h4>
                <button className='Boton' onClick={incrementar}>+</button>
            </div>
            <div>
                <button className='Boton' onClick={()=> onAdd(cantidad)} disabled={!stock}> Agregar al carrito</button>
            </div>
        </div>
     )
}