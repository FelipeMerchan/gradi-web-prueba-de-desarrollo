import React from 'react'

import '../assets/styles/components/WeatherCard.scss'
import cloud from '../assets/static/nublado.svg'

export const WeatherCard = () => {
  return (
    <article className="WeatherCard">
      <div>
        <figure className="WeatherCard__iconContainer">
          <img className="WeatherCard__icon" width="40" src={cloud} alt="" />
        </figure>
        <div>
          <span className="WeatherCard__temperature">29<sup>°C</sup></span>
          <span className="WeatherCard__location">
            <span>Lyon</span><br />
            Francia
          </span>
        </div>
      </div>
      <div className="WeatherCard__footer">
        <span>Humidity 64%</span> <span>Nortwost</span><span>8.3km/h</span>
      </div>
    </article>
  )
}
