import { takeEvery, put, call } from 'redux-saga/effects';
import axios from 'axios';
import constants from '../constant';

const axiosInstance = axios.create({
  timeout:10000, // Timeout sau 10 giây (10000 milliseconds)
});

function* fetchWeatherSaga(action) {

  const {payload} = action
  
  try {
    const response = yield call(axiosInstance.get, `https://api.openweathermap.org/data/2.5/forecast?q=${payload}&units=metric&appid=${constants.apiKey}&cnt=7&units=metric`);
      yield put({ type: 'FETCH_WEATHER_SUCCESS', payload: response.data });

  } catch (error) {
    console.log(error)

    if(error.name === "AxiosError"){
      yield put({ type: 'FETCH_WEATHER_FAILURE', error: error.message });
    }

    yield put({ type: 'FETCH_WEATHER_FAILURE', error: error.response.data.message });
  }
}

export function* watchFetchWeatherData() {
  yield takeEvery('FETCH_WEATHER_REQUEST', fetchWeatherSaga);
}