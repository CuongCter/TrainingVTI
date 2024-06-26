import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_WEATHER_REQUEST, fetchWeatherSuccess, fetchWeatherFailure } from '../actions/weatherActions';

const fetchWeatherFromApi = (city, apiKey) => {
  return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`, {
    timeout: 10000,
  });
}

function* fetchWeather(action) {
  try {
    const apiKey = '8dabb22e62aa2bd239b1022b511d0c8e';
    const city = action.payload;
    const response = yield call(fetchWeatherFromApi, city, apiKey);
    console.log(response.data);
    yield put(fetchWeatherSuccess(response.data));
  } catch (error) {
    yield put(fetchWeatherFailure(error.message));
  }
}

export default function* weatherSaga() {
  yield takeLatest(FETCH_WEATHER_REQUEST, fetchWeather);
}
