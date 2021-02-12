import React from 'react'

import '../assets/styles/components/CreateLocation.scss'
import addLocation from '../assets/static/add-locations.svg'

export const CreateLocation = () => {
  return (
    <article className="CreateLocation" role="button">
      <button className="CreateLocation__button" type="button">Add location</button>
      <img className="CreateLocation__image" src={addLocation} width="120" alt="ilustración de la ciudad con ícono de ubicación" />
    </article>
  )
}
