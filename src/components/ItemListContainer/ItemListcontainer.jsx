import { useEffect, useState, } from "react"
import { getProductos,getProductosByCategoria } from "../../asyncMock/asyncMock"
import { ItemList } from "../ItemList/ItemList"
import './ItemListContainer.css'
import { Button } from "react-bootstrap"
import { useParams } from "react-router-dom"




const ItemListContainer =({greeting})=>{
    //Luego de resolverse la promesa en el tiempo estipulado guardamos la respuesta en el array de productos y este array de productos lo voy a guardar en el estado
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