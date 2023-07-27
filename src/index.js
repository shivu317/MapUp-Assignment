import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';
import './index.css';
import AntdComponent from './antd/antd';


ReactDOM.render(
  <Provider store={store}>
    <App />
    <AntdComponent />
    {/* <ConnectedMap />
    <LoadButton /> */}
  </Provider>,
  document.getElementById('root')
);


