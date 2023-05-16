
import './banner.css'

import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

export const Banner = () => {
  return (
    <main className='hero '>
      <div className='promo '>

        <ReactPlayer className='  video'
         url={require('./assets/gym2.mp4')}
         width='100'
         height='100'
         playing
         muted
         loop
         />

        <div className='info '>
          <div className='info_caja col-8'>
              <h1 className='titulo container  '> Flux  tu estilo , tu potencia</h1>
              <p className=' mt-5 texto d-none d-md-block'>¿Listo para llevar tu rendimiento al siguiente nivel? Descubre el poder de Flux, la combinación perfecta de estilo y funcionalidad en ropa deportiva de alto impacto</p>
              <Link to={'/productos'}><button type='button' className='boton_inicio mt-2mt-md-5  botones'>HECHA UN VISTASO</button></Link>
          </div>
             
        </div>
            
      </div>

       
        
    </main>
  )
}


