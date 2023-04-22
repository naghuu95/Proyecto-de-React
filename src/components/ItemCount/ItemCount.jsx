import './ItemCount.css'
import { useState } from 'react'
import { Button } from 'react-bootstrap'

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
                <Button variant="outline-secondary"onClick={decrementar} >  -  </Button>
               
                <h4 className='px-3'>{cantidad}</h4>

                <Button variant="outline-secondary"onClick={incrementar} >  +  </Button>
            </div>
            <div>
            <Button variant="outline-secondary" className='mt-3' onClick={()=> onAdd(cantidad)} disabled={!stock}> Agregar al carrito</Button>
            </div>
        </div>
     )
}