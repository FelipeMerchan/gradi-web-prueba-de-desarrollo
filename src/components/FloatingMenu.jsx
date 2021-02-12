import React, { Component } from 'react'

import { connect } from 'react-redux'
import * as currentBogotaActions from '../actions/currentBogotaActions'

import '../assets/styles/components/FloatingMenu.scss'
import wheatherIcon from '../assets/static/nublado.svg'

class FloatingMenu extends Component {
  componentDidMount() {
    this.props.getCurrentBogotaWeather()
  }

  render() {
    console.log(this.props)
    return (
      <nav className="FloatingMenu">
        <li>
          <img className="FloatingMenu__image" src={wheatherIcon} width="30" alt="Ícono del clima" />
          <span className="FloatingMenu__weather">Cloudy</span>
        </li>
        <li>
        <span className="FloatingMenu__temperature">31<sup>°C</sup></span>
        </li>
      </nav>
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.currentBogotaReducer
}

export default connect(mapStateToProps, currentBogotaActions)(FloatingMenu)
