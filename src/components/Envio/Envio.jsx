import React, { useState, useEffect } from 'react';
import './envio.css';

 export const Envio = () => {
  const mensajes = [
    'Envío gratis a toda Argentina a partir de $15000',
    'Aceptamos todos los medios de pago',
  ];
  const [mensajeActual, setMensajeActual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMensajeActual((prevMensaje) => (prevMensaje + 1) % mensajes.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='envio'>
      <p className='py-2'>🔥 {mensajes[mensajeActual]} 🔥 </p>
    </div>
  );
};


