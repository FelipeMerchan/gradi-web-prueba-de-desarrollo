import React from 'react'

import { Place } from './Place'
import { TopReviews } from './TopReviews'
import '../assets/styles/components/PlaceToVisit.scss'

export const PlaceToVisit = () => {
  return (
    <div className="PlaceToVisit">
      <div>
        <h2 className="PlaceToVisit__title"><strong>Place to</strong> Visit</h2>
        <TopReviews />
      </div>
      <div className="PlaceToVisit__options">
        <Place
          size="large"
          location="Arab Street Singapore"
        />
        <Place
          size="small"
          location="Art Science Museum"
        />
        <Place
          size="medium"
          setAction={ true }
          location="Fountain of "
        />
      </div>
    </div>
  )
}
