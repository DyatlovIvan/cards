import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './n1-main/m1-ui/App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./n1-main/m2-bll/store";
import {BrowserRouter, HashRouter} from "react-router-dom";

ReactDOM.render(
    <HashRouter>
         <Provider store={store}>
            <React.StrictMode>
                <App/>
            </React.StrictMode>
         </Provider>
     </HashRouter>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();