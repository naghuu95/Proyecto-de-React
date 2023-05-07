import { useEffect, useState, } from "react"
//import { getProductos,getProductosByCategoria } from "../../asyncMock/asyncMock"
//Importamos la funcion getFirestore para consumir nuestra base de datos 
import { getFirestore } from "../../firebase/config"
import { ItemList } from "../ItemList/ItemList"
import './ItemListContainer.css'
import { useParams } from "react-router-dom"
import {ImSpinner10} from 'react-icons/im'





const ItemListContainer =()=>{
    
    const [productos, setProductos]= useState([])

    const [loading,setLoading]=useState(false)
    const [titulo,setTitulo]=useState("Productos")
    
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
                                setTitulo(categoriaId ? categoriaId : 'Productos');
                             })
                             .catch((error)=> console.log(error))
                             .finally(()=>{
                                setLoading(false)
                                

                             })
          
       },[categoriaId,setLoading])



   return (

    <>
    {/* Nuestro componente arranca con el loading en "true" y cuando resulve, imprime en pantalla todo nuestro componente ItemList (donde mapeamos cada uno de los productos) */}
      
      
      {
        loading
        ?<div className='caja_spinner'>
            <ImSpinner10 className="spinner"/>
            <h3 className="pt-3 ps-3 fs-5"> Cargando . . .</h3>
        </div>
        : 
        
        <ItemList productos={productos} titulo={titulo}/>
      }

     
    </>

    
   )
}

export default ItemListContainer



 
      