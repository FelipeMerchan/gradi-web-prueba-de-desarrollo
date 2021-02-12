import { fetchData } from '../utils/fetchData'
import { WEATHER_KEY } from '../keys'
import { GET_CURRENT_BOGOTA_WEATHER, LOADING, ERROR } from '../types/currentBogotaTypes'

export const getCurrentBogotaWeather = () => async (dispatch) => {
  dispatch({
    type: LOADING
  })
  try {
    const response = await fetchData(`https://api.openweathermap.org/data/2.5/weather?q=bogota&appid=${WEATHER_KEY}&units=metric`, 'currentBogota')
    dispatch({
      type: GET_CURRENT_BOGOTA_WEATHER,
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