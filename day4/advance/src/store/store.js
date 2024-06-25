
// import { createStore } from 'redux';
// import rootReducer from '../reducers/index.js';

// const store = createStore(rootReducer);

// export default store;

import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import postsReducer from '../reducers/postsReducer';
import rootSaga from '../saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(postsReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
