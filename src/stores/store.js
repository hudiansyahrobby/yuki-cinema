import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import userReducer from '../reducers/userReducer';
import scheduleReducer from '../reducers/scheduleReducer';

const reducer = combineReducers({
  user: userReducer,
  schedule: scheduleReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));
export default store;
