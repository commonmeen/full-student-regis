import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentForm from './containers/StudentContainer';
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import rootReducer from './reducers/index'
import { async } from 'q';
import { getAllStudent } from './actions/StudentAction'
import axios from 'axios'

const store = createStore(
  rootReducer
)

function App() {
  return (
    <div>
      <Provider store={store}>
        <StudentForm></StudentForm>
      </Provider>
    </div>
  );
}

export default App;
