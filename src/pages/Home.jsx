import React from 'react'

import { Banner } from '../components/Banner'
import { DaysForecast } from '../components/DaysForecast'
import { PlaceToVisit } from '../components/PlaceToVisit'
import { WeatherCardList } from '../components/WeatherCardList'
import { FloatingMenu } from '../components/FloatingMenu'
import '../assets/styles/pages/Home.scss'

export const Home = () => {
  return (
    <>
      <FloatingMenu />
      <div className="wrapper">
        <Banner />
        <div className="base-layout">
          <div>
            <DaysForecast />
            <PlaceToVisit />
          </div>
          <WeatherCardList />
        </div>
      </div>
    </>
  )
}
