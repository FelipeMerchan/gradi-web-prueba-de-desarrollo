import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/TopReviews.scss'
import juana from '../assets/static/juana.png'
import diana from '../assets/static/diana.png'
import juan from '../assets/static/juan.png'

export const TopReviews = () => {
  return (
    <div className="TopReviews">
      <span>+ Top Reviews</span>
      <div className="TopReviews__users">
        <Link to="/" exact="true" >
          <img src={juan} width="20" alt="Juan Gabriel" />
        </Link>
        <Link to="/" exact="true" >
          <img src={juana} width="20" alt="Juana Merchan" />
        </Link>
        <Link to="/" exact="true" >
          <img src={diana} width="20" alt="Diana Zuluaga" />
        </Link>
        <Link to="/" exact="true" >
          6+
        </Link>
      </div>
    </div>
  )
}
