
import { Item } from "../Item/Item"
import'./ItemList.css'

export const ItemList =({productos})=>{
    return(
        <div className="container bg-primary ">
            <section className="row bg-dark d-flex justify-content-evenly ">
            {productos.map(prod=> <Item  key={prod.id} {...prod}/>)}
            </section>
            
        </div>
    )
}