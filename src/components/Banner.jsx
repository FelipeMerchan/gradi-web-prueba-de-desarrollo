import React from 'react'

import cover from '../assets/static/bogota.jpg'
import pin from '../assets/static/pin-primary-light-color.svg'
import bogotaMap from '../assets/static/mapa-de-bogota.svg'
import '../assets/styles/components/Banner.scss'

export const Banner = () => {
  return (
    <section className="Banner">
      <div className="Banner__information">
        <figure className="Banner__iconContainer">
          <img className="Banner__icon" src={pin} width="30" alt="Ícono de ubicación" />
          <figcaption className="Banner__city">Bogotá</figcaption>
        </figure>
        <figure className="Banner__mapContainer">
          <img className="Banner__map" src={bogotaMap} width="100" title="Mapa de Bogotá" alt="Mapa de Bogotá" />
        </figure>
      </div>
      <figure className="Banner__imageWrapper">
        <picture>
          <source media="(min-width: 1300px)" srcSet={cover} />
          <source media="(min-width: 1000px)" srcSet={cover} />
          <img className="Banner__image" src={cover} alt="Fotografía de Bogotá" width="1440" />
        </picture>
      </figure>
    </section>
  )
}
