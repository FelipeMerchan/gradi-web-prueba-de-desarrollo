import { GET_FORECAST_BOGOTA_WEATHER, LOADING, ERROR } from '../types/forecastBogotaTypes'

const INITIAL_STATE = {
  forecastBogota: {},
  loading: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_FORECAST_BOGOTA_WEATHER:
      return {
        ...state,
        forecastBogota: action.payload,
        loading: false
      }

      case LOADING:
        return { ...state, loading: true }

      case ERROR:
      return { ...state, error: action.payload, loading: false }

      default: return state;
  }
}