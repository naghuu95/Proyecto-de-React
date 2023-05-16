import './ItemCount.css'
import { Button } from 'react-bootstrap'



 export const ItemCount= ({modify, max, counter})=>{
    
   
   

    const incrementar =() => {
        if(counter < max){ 
            modify (counter + 1)
        }   
     }

     const decrementar =() => {
        if (counter > 1){
            modify (counter - 1)
        }
     }
     

     return (
        <div className='Contador '>
            <div className='Controles '>
                <Button variant="outline-secondary boton fs-3"onClick={decrementar} > - </Button>
               
                <h4 className='mx-2 fs-5'>{counter}</h4>

                <Button variant="outline-secondary fs-3 boton"onClick={incrementar} > +</Button>
            </div>
           
        </div>
     )
}