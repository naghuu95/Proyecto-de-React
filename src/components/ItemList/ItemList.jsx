
import { Item } from "../Item/Item"
import'./ItemList.css'

export const ItemList =({productos})=>{
    return(
        <div className="container  ">
            <section className="row mb-5  d-flex justify-content-evenly ">
            {productos.map(prod=> <Item  key={prod.id} {...prod}/>)}
            </section>
            
        </div>
    )
}