import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const defaultState = {};

const store = createStore(
                  rootReducer,
                  defaultState,
                  applyMiddleware(sagaMiddleware)
              );
sagaMiddleware.run(rootSaga);

export default store;