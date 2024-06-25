import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_POSTS_REQUEST, fetchPostsSuccess, fetchPostsFailure } from './actions';

function* fetchPosts() {
  try {
    const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');
    const data = yield response.json();
    yield put(fetchPostsSuccess(data));
  } catch (error) {
    yield put(fetchPostsFailure(error.message));
  }
}

function* watchFetchPosts() {
  yield takeEvery(FETCH_POSTS_REQUEST, fetchPosts);
}

export default function* rootSaga() {
  yield watchFetchPosts();
}
