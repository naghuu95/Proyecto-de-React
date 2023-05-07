
import './banner.css'

import React from 'react'
import ReactPlayer from 'react-player'
import { Link } from 'react-router-dom'

export const Banner = () => {
  return (
    <main className='hero '>
        <div className='promo '>

        <ReactPlayer className='video'
        url={require('./assets/gym2.mp4')}
        width='100'
        height='100'
        playing
        muted
        loop
        />
             <div className='info'>
             <div className='info_caja'>
             <h1 className='titulo fs-2'> La mejor indumentaria deportiva la encuentras en FLUX</h1>
            <p className='mt-5 texto'>Ropa deportiva para gimnacio,para amantes del deporte ,para el dia a dia y para mucho mas</p>
            <Link to={'/productos'}><button type='button' className='mt-5 botones'>HECHA UN VISTASO</button></Link>
            

             </div>
             
             </div>
            
        </div>

       
        
    </main>
  )
}


