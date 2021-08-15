import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { PersistGate } from 'redux-persist/integration/react';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <PersistGate loading={null} persistor={store.persistor}>
    <Provider store={store.store}>
      <App />
    </Provider>
  </PersistGate>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
