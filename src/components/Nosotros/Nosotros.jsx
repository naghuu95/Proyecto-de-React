import React from 'react'
import { Col,Row } from 'react-bootstrap'
import './nosotros.css'




export const Nosotros = () => {


 
  return (
    <div className='pt-5' >
      <Row className='container-fluid nosotros d-flex justify-content-around align-items-center py-5 my-5'>

      <Col md={5 } className=''>

     <img src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='w-100' alt="" />

      </Col>

      <Col md={6} className='columna  d-flex flex-column align-items-center  justify-content-between'>
        <h2 className='py-5'>Nosotros</h2>

        <p className='pb-5'> 

        En Flux somos una marca de ropa deportiva que se enfoca en la comodidad, la calidad y el estilo. Nos apasiona el deporte y creemos que la ropa que usas debe permitirte moverte con facilidad mientras te ves y te sientes genial.

            Nos enorgullece decir que nuestras prendas son fabricadas con materiales de alta calidad y están diseñadas para durar. Además, todas nuestras prendas son cuidadosamente elaboradas con detalles de moda y colores vibrantes para que puedas expresar tu personalidad y estilo en el gimnasio o en la calle.

            Nuestro equipo está compuesto por expertos en moda y deporte, quienes trabajan incansablemente para asegurarse de que cada prenda cumpla con los estándares de calidad que nuestros clientes merecen. Nos esforzamos por mantenernos actualizados con las últimas tendencias y tecnologías de la industria para que siempre estés a la vanguardia.

            En Flux, estamos comprometidos con la satisfacción de nuestros clientes. Siempre estamos dispuestos a escuchar tus comentarios y sugerencias para mejorar nuestros productos y servicios. ¡Gracias por elegir Flux como tu marca de ropa deportiva favorita!

        </p>


      </Col>


      </Row>
      
    </div>
  )
}



