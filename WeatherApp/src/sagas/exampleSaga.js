import { takeEvery, put, call } from 'redux-saga/effects';


function* fetchDataSaga() {
  try {
  
    const data = yield call(() => new Promise((resolve) => {
      setTimeout(() => resolve(['Item 1', 'Item 2', 'Item 3']), 1000);
    }));
 
    yield put({ type: 'FETCH_DATA_SUCCESS', payload: data });
  } catch (error) {
 
    yield put({ type: 'FETCH_DATA_FAILURE', error });
  }
}

export function* watchFetchData() {
  yield takeEvery('FETCH_DATA_REQUEST', fetchDataSaga);
}