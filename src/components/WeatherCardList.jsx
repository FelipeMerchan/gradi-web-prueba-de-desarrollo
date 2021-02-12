import React from 'react'

import { WeatherCard } from './WeatherCard'
import { CreateLocation } from './CreateLocation'
import '../assets/styles/components/WeatherCardList.scss'

export const WeatherCardList = () => {
  return (
    <div className="WeatherCardList">
      <WeatherCard />
      <WeatherCard />
      <CreateLocation />
    </div>
  )
}
