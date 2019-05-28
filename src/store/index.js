import {createStore, combineReducers, applyMiddleware }from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import userReducer from './user'

const reducers = combineReducers({
    user: userReducer
});

export default createStore(reducers, applyMiddleware(logger, thunk))