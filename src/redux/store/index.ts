import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer';
import { rootSaga } from '../saga';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Mount it on the Store
// const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().prepend(sagaMiddleware).concat(logger)
});
// Run the saga
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
