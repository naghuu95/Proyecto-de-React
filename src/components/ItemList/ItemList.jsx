
import { Item } from "../Item/Item"
import'./ItemList.css'


export const ItemList =({productos, titulo})=>{
    return(
        <div className="container py-5  ">

            <h2 className="py-5 mt-5 titulo_items"> {titulo} </h2>
            <section className="row mb-5  d-flex justify-content-evenly ">
            {productos.map(prod=> <Item  key={prod.id} {...prod}/>)}
            </section>
            
        </div>
    )
}