import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {store} from './store/index';
import {ToastContainer} from 'react-toastify';
import {fetchOffersAction, checkAuthAction} from './store/api-actions';
import 'react-toastify/dist/ReactToastify.css';
import { HashRouter } from 'react-router-dom';

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <ToastContainer />
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
);
