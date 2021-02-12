import React, { Component } from 'react'

import Banner from '../components/Banner'
import DaysForecast from '../components/DaysForecast'
import { PlaceToVisit } from '../components/PlaceToVisit'
import { WeatherCardList } from '../components/WeatherCardList'
import FloatingMenu from '../components/FloatingMenu'

import '../assets/styles/pages/Home.scss'

class Home extends Component {
  render() {
    return (
      <>
        <FloatingMenu />
        <div className="wrapper">
          <Banner />
          <main className="base-layout">
            <div>
              <DaysForecast />
              <PlaceToVisit />
            </div>
            <WeatherCardList />
          </main>
        </div>
      </>
    )
  }
}

export default Home
