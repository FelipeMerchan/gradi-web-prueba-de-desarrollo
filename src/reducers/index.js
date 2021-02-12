import { combineReducers } from 'redux'
import currentBogotaReducer from './currentBogotaReducer'
import forecastBogotaReducer from './forecastBogotaReducer'

export default combineReducers({
  currentBogotaReducer,
  forecastBogotaReducer
})