
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
          <div className='info_caja '>

              <h1 className='titulo container  '> La mejor indumentaria deportiva la encuentras en FLUX</h1>
              <p className=' mt-5 texto d-none d-md-block'>Ropa deportiva para gimnacio,para amantes del deporte ,para el dia a dia y para mucho mas</p>
              <Link to={'/productos'}><button type='button' className='boton_inicio mt-2mt-md-5 bg-secondary botones'>HECHA UN VISTASO</button></Link>
            

          </div>
             
        </div>
            
      </div>

       
        
    </main>
  )
}


