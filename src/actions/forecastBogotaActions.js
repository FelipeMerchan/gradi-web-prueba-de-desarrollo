import { fetchData } from '../utils/fetchData'
import { WEATHER_KEY } from '../keys'
import { GET_FORECAST_BOGOTA_WEATHER, LOADING, ERROR } from '../types/forecastBogotaTypes'

export const getForecastBogotaWeather = () => async (dispatch) => {
  dispatch({
    type: LOADING
  })
  try {
    const response = await fetchData(`https://api.openweathermap.org/data/2.5/forecast?q=bogota&cnt=3&appid=${WEATHER_KEY}&units=metric`)
    dispatch({
      type: GET_FORECAST_BOGOTA_WEATHER,
      payload: response
    })
  } catch (error) {
    console.log(`Error: ${error.message}`)
    dispatch({
      type: ERROR,
      payload: error.message
    })
  }
}