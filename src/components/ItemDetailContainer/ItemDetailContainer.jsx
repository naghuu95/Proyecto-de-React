import { useEffect,useState } from "react"
import { getProductoById } from "../../asyncMock/asyncMock"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

 export const ItemDetailContainer=()=>{
    const[producto,setProducto]=useState(null)

    const {itemId}=useParams()

    useEffect(()=>{
        getProductoById(itemId)
        .then(response=>{
            setProducto(response)
        })
        .catch(error=>{
            console.error(error)
        })
    },[itemId])

    return(
        <div className="bg-dark row">
           <ItemDetail {... producto}/>
        </div>
    )
}