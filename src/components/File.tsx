import React from 'react';
import file from './../assets/img/file.png';
import './../assets/styles/file.css'

interface Params {
  customer: string,
  enlace: string
}

const File = ({customer, enlace}: Params) => {
  
  return (
    <div>
        <h1 className="text-center">{customer}</h1>
        <h2 className='text-center'>Mediante este enlace usted puede aprobar su proyecto.</h2>
        <div className="background-grey">
          <p>Puede revisar su menú ingresando al siguiente enlace</p>
          <a href={enlace} target="_blank" rel="noreferrer">
            <img className="file-image" src={file} alt="Icono de archivo" />
            <div className='button-file'>
              <p>Revisa tu menu aquí</p>
            </div>
          </a>
        </div>
    </div>
  )
}

export default File