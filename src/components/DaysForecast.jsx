import React, {Component} from 'react'

import { connect } from 'react-redux'
import * as forecastBogotaActions from '../actions/forecastBogotaActions'

import { ForecastDay } from '../components/ForecastDay'
import '../assets/styles/components/DaysForecast.scss'
import { WeatherCard } from './WeatherCard'

class DaysForecast extends Component {
  componentDidMount() {
    this.props.getForecastBogotaWeather()
  }

  render() {
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
}

const mapStateToProps = (reducers) => {
  return reducers.forecastBogotaReducer
}

export default connect(mapStateToProps, forecastBogotaActions)(DaysForecast)