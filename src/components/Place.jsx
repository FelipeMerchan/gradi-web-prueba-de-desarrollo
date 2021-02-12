import React from 'react'

import '../assets/styles/components/Place.scss'
import pin from '../assets/static/pin.svg'

export const Place = ({ size, setAction, location }) => {
  const Button = setAction ? <button className="Place__button" type="button">+</button> : ''

  return (
    <article className={`Place ${size}`}>
      <div className="Place__location">
        <img src={pin} width="20" alt="Ícono de ubicación" />
        <span>{location}</span>
      </div>
      {Button}
    </article>
  )
}
