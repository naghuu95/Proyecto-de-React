import { useEffect,useState } from "react"
//import { getProductoById } from "../../asyncMock/asyncMock"
//importamos getFirestore
import { getFirestore } from "../../firebase/config";
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import {ImSpinner9} from 'react-icons/im'
import './ItemDetailContainer.css'



 export const ItemDetailContainer=()=>{
    const[producto,setProducto]=useState(null)
    
    const[loading,setLoading]= useState(false)
    const {itemId}=useParams()

    useEffect(()=>{

        setLoading(true)

        const db=getFirestore()

        const productos = db.collection('productos')

        const item = productos.doc(itemId)

        item.get()
            .then ((doc)=>{
                setProducto({
                    id: doc.id, ...doc.data()
                })
            })
            .catch((error)=>console.log(error))
            .finally(()=>{
                setLoading(false)
            })
       
        
    },[itemId])

    return(
        <div className=" ">
         {
            loading ?
            <div className='caja_spinner'>
            <ImSpinner9 className="spinner"/>
            <h5 className="pt-3 ps-3 "> Cargando . . .</h5>
             </div>
            
            /* <FontAwesomeIcon className=" loading fs-1 fa-spin" icon={faSpinner} />*/
             : <ItemDetail {... producto}/>
         }
  
           
        </div>
    )
}

 /*setLoading(true)
        getProductoById(itemId)
        .then(response=>{
            setProducto(response)
        })
        .catch(error=>{
            console.error(error)
        })

        .finally(()=>{
            setLoading(false)
        })*/
