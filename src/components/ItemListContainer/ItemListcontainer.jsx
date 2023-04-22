import { useEffect, useState, } from "react"
import { getProductos,getProductosByCategoria } from "../../asyncMock/asyncMock"
import { ItemList } from "../ItemList/ItemList"
import './ItemListContainer.css'
import { useParams } from "react-router-dom"




const ItemListContainer =({greeting})=>{
    
    const [productos, setProductos]= useState([])
    
    const{ categoriaId }= useParams()

       useEffect(()=>{
        const asyncFunc= categoriaId ? getProductosByCategoria : getProductos

        asyncFunc(categoriaId)
            .then(response=>{
                setProductos(response)
            })
            .catch(error=>{
                console.error(error)
            })

       },[categoriaId])



   return (
    <div>
        <h1> {greeting}</h1>
        <ItemList productos={productos}/>
    </div>
   )
}

export default ItemListContainer