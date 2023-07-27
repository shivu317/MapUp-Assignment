import { combineReducers } from 'redux';
import mapReducer from './mapReducer'; 

// Combine all reducers
const rootReducer = combineReducers({
  map: mapReducer,
  
});

export default rootReducer;
