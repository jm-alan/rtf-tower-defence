import type { Store, AnyAction } from 'redux';

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';

import App from './App';
import Modal from './components/Modal';
import store from './store';
import CsrfFetch from './store/csrfetch';

import './index.css';

global.window.csrfetch = new CsrfFetch('');

const Root: React.FC = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

render(
  <Provider store={store}>
    <Root />
    <Modal />
  </Provider>,
  document.getElementById('root')
);
