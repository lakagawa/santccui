import { combineReducers } from 'redux'
import PatientListReducer from './PatientListReducer';

const RootReducer = combineReducers({
  PatientList: PatientListReducer
})

export default RootReducer;