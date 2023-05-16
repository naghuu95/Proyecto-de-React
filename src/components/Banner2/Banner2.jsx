import React from 'react'
import  './banner2.css'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const Banner2 = () => {
  return (
    <div className='banner2 row '>
        <Col md={12}/>


        <div className='caja_img'><img className='w-100 h-100 ' src="https://images.pexels.com/photos/4761352/pexels-photo-4761352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>



        <div>
        <h1 className='titulo container  '> Flux  tu estilo , tu potencia</h1>
        <p className=' mt-5 texto d-none d-md-block'>¿Listo para llevar tu rendimiento al siguiente nivel? Descubre el poder de Flux, la combinación perfecta de estilo y funcionalidad en ropa deportiva de alto impacto</p>
        <Link to={'/productos'}><button type='button' className='boton_inicio mt-2mt-md-5  botones'>HECHA UN VISTASO</button></Link>
        </div>

        

        <div className='col-6 caja_info'>
         <h2 className='mb-5 '>FORJA TU LEGADO</h2>
          <p className='mb-5'>Los estilos clásicos se encuentran con la funcionalidad moderna en nuestros shorts,
           con cortes clásicos, telas frescas y un diseño que rinde homenaje a nuestro legado FLUX.</p> 
         <Link to={'/categoria/shorts'}><button className='botones '>EXPLORA NUESTRA COLECCIÓN DE SHORTS</button>  </Link>

        </div>
       
        <Col/>
       
    </div>
  )
}
