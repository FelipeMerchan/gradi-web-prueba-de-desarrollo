import React from 'react'

import { ForecastDay } from '../components/ForecastDay'
import '../assets/styles/components/DaysForecast.scss'

export const DaysForecast = () => {
  return (
    <div className="DaysForecast">
      <h2 className="DaysForecast__title"><strong>3 Days</strong> Forecast</h2>
      <div className="DaysForecast__days">
        <ForecastDay isToday={ true } />
        <ForecastDay />
        <ForecastDay />
      </div>
    </div>
  )
}
