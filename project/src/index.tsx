import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app/app';
import {store} from './store/index';
import {reviews} from './mocks/reviews';
import {cities} from './mocks/cities';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        reviews={reviews}
        cities={cities}
      />
    </Provider>
  </React.StrictMode>,
);
