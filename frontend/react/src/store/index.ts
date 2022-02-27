import { createStore, combineReducers, applyMiddleware, compose, Store, StoreEnhancer, AnyAction } from 'redux';
import thunk from 'redux-thunk';

import modal from './modal';

const rootReducer = combineReducers({
  modal
});

let enhancer: StoreEnhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  enhancer = compose(applyMiddleware(thunk, require('redux-logger').default));
}

export default createStore(rootReducer, {}, enhancer) as Store<AppState, AnyAction>;
