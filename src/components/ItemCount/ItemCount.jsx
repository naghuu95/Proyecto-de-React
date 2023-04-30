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
        <div className='Contador'>
            <div className='Controles'>
                <Button variant="outline-secondary"onClick={decrementar} >  -  </Button>
               
                <h4 className='px-3'>{counter}</h4>

                <Button variant="outline-secondary"onClick={incrementar} >  +  </Button>
            </div>
           
        </div>
     )
}