import React from 'react';
import notFound from './../assets/img/not-found.png';
import './../assets/styles/notfound.css'

const NoID = () => {
  return (
    <div className='not-found'>
        <img src={notFound} alt="Not found" />
        <h2>Al parecer faltan parámetros en tu enlace o el id no existe, puedes pedirlo nuevamente con el asesor de ventas.</h2>
    </div>
  )
}

export default NoID