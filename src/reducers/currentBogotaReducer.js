import { GET_CURRENT_BOGOTA_WEATHER, LOADING, ERROR } from '../types/currentBogotaTypes'

const INITIAL_STATE = {
  currentBogota: {},
  loading: false,
  error: ''
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CURRENT_BOGOTA_WEATHER:
      return {
        ...state,
        currentBogota: action.payload,
        loading: false
      }

      case LOADING:
        return { ...state, loading: true }

      case ERROR:
      return { ...state, error: action.payload, loading: false }

      default: return state;
  }
}