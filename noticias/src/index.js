import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as reducers from './reducers'
import {Provider} from 'react-redux'
import {reducer as formReducer} from 'redux-form'
import {createStore, combineReducers} from 'redux'


const store= createStore(combineReducers({
  ...reducers,
  form: formReducer
})) //aca tenemos que pasarle nuestro reducer
ReactDOM.render(
  
  <Provider store={store}>
    <App />
  </Provider>
  
  ,document.getElementById('root')
);
  

