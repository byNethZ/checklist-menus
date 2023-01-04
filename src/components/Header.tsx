import React from 'react';
import './../assets/styles/header.css'
import logo from './../assets/img/logo.png'

export const Header = () => {
  return (
    <div className="header">
        <img className="logo" src={logo} alt="logotipo Bliones" />
    </div>
  )
}
