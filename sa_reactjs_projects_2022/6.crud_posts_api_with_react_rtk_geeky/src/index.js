import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from './store/store';

// Now wrap with Provider and define store in it, yahan hume store ka props milta hai , usi mein store add kr dinge hum
// Now use the query in component, us hook ka aap ab component mein use kr skte hai, or yeh hook object return krta hai jisko destructing kr skte hai hum
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
