import { combineReducers } from 'redux';
import exampleReducer from './exampleReducer';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  example: exampleReducer,
  weather: weatherReducer,
});

export default rootReducer;