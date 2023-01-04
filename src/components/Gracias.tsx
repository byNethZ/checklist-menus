import React from 'react';
import check from './../assets/img/check.gif';
import './../assets/styles/thanks.css'

const Gracias = () => {
  return (
    <div className='thanks'>
        <h2>Gracias</h2>
        <img src={check} alt="Check" />
        <p>Nuestros asesores de ventas se pondrán en contacto para informarle del estatus de su proyecto.</p>
    </div>
  )
}

export default Gracias