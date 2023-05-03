import { useEffect, useState, } from "react"
//import { getProductos,getProductosByCategoria } from "../../asyncMock/asyncMock"
//Importamos la funcion getFirestore para consumir nuestra base de datos 
import { getFirestore } from "../../firebase/config"
import { ItemList } from "../ItemList/ItemList"
import './ItemListContainer.css'
import { useParams } from "react-router-dom"
import {ImSpinner3} from 'react-icons/im'




const ItemListContainer =({greeting})=>{
    
    const [productos, setProductos]= useState([])

    const [loading,setLoading]=useState(false)
    
    const{ categoriaId }= useParams()

       useEffect(()=>{

        setLoading(true)

        const db = getFirestore();

        const productos =categoriaId
                         ? db.collection('productos').where('categoria','==',categoriaId)
                         :db.collection('productos')
                         productos.get()
                             .then((res)=>{
                                const newItem =res.docs.map((doc)=>{
                                    return {id: doc.id , ...doc.data()}
                                })
                                console.table(newItem)
                                setProductos(newItem)
                             })
                             .catch((error)=> console.log(error))
                             .finally(()=>{
                                setLoading(false)
                             })
                            

        /*const productos= db.collection('productos')

        if(categoriaId){
            const filtrado = productos.where("categoria","==",categoriaId)
            filtrado.get()
                .then((res)=>{
                    const newItem =res.docs.map ((doc)=>{
                        return{id: doc.id, ...doc.data()}
                    })
                    setProductos(newItem)
                })
                .catch ((err)=>console.log(err))
                .finally (()=>{
                    setLoading(false)
                })
        }

        else{
            productos.get()
            .then((res)=>{
               const newItem =res.docs.map((doc)=>{
                   return {id: doc.id, ...doc.data()}
               })
               console.table(newItem)
               setProductos(newItem)
            })
            .catch((err)=>console.log(err))
            .finally(()=>{
               setLoading(false)
            })
      
        }*/

        
       },[categoriaId,setLoading])



   return (

    <>
    {/* Nuestro componente arranca con el loading en "true" y cuando resulve, imprime en pantalla todo nuestro componente ItemList (donde mapeamos cada uno de los productos) */}
      {
        loading
        ?<div className='spinner'><ImSpinner3/></div>
        : 
        <ItemList productos={productos}/>
      }
    </>

    
   )
}

export default ItemListContainer



 
      