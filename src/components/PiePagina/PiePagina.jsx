import React from 'react'
import {SlSocialFacebook, SlSocialInstagram,SlSocialTwitter} from 'react-icons/sl'
import './piePagina.css'


export const PiePagina = () => {
  return (
    <footer class="piepagina text-center text-white  d-flex flex-column align-items-center">
  
  <div class="container pt-5 row  d-flex justify-content-center">
    
    <section class="col-6 mb-5 d-flex py-4 justify-content-evenly">
      
      <a class="btn btn-outline-light btn-floating m-1 pb-2 " href="#!" role="button">
        <SlSocialFacebook className='fs-5'/>
      </a>

      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
      <SlSocialInstagram className='fs-5'/>
        </a>

     
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button">
      <SlSocialTwitter className='fs-5'/>
        </a>

      
    </section>
    
  </div>
  

  
  <div class="text-center col-12 py-4 copy ">
    © 2023 Copyright : 
    <a class="text-white " href=""> Braian Nahuel Mercado</a>
  </div>
  
</footer>
  )
}
