import { compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reduxPersist } from './configureStore';

import reducers from './modules/RootReducer';
import sagas from './modules/RootSaga';

const middlewares = [];

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer =
  process.env.NODE_ENV === 'development'
    ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
    : compose(applyMiddleware(...middlewares));

const { persistor, store } = reduxPersist(composer, reducers);
sagaMiddleware.run(sagas);

export { persistor, store };
