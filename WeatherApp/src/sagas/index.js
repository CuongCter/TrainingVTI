import { all, call } from 'redux-saga/effects';
import { watchFetchData } from './exampleSaga';
import { watchFetchWeatherData } from './weatherSaga';

function* rootSaga() {
    yield all([
        watchFetchData(),
        watchFetchWeatherData(),
    ]);
}

export default rootSaga;