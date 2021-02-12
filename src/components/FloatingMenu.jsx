import React from 'react'

import '../assets/styles/components/FloatingMenu.scss'
import wheatherIcon from '../assets/static/nublado.svg'

export const FloatingMenu = () => {
  return (
    <nav className="FloatingMenu">
      <li>
        <img className="FloatingMenu__image" src={wheatherIcon} width="30" alt="Ícono del clima" />
        <span className="FloatingMenu__weather">Cloudy</span>
      </li>
      <li>
        <span className="FloatingMenu__temperature">31<sup>°C</sup></span>
      </li>
    </nav>
  )
}
