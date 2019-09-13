import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux';
import {reducer} from './reducer';

const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <App />,
    </Provider>
 document.getElementById("root"));
