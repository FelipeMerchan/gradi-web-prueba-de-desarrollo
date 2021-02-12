import React from 'react'

import '../assets/styles/components/ForecastDay.scss'
import cloud from '../assets/static/nublado.svg'

export const ForecastDay = ({ isToday }) => {
  return (
    <article className="ForecastDay">
      <div>
        <figure className="ForecastDay__imageContainer">
          <img className="ForecastDay__image" src={cloud} width="30" alt="Ícono de nube con lluvia" />
        </figure>
        <div className="ForecastDay__details">
          <span><strong>Friday</strong></span><br />
          <span>Rain</span>
        </div>
      </div>
      <div className={`ForecastDay__temperature ${isToday ? 'today' : ''}`}>
        <span>32 / 23</span>
      </div>
    </article>
  )
}
