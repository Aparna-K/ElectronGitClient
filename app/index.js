import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './components/containerMain';


const router = (
    <Provider store={store}>
      <App />
    </Provider>
);

ReactDOM.render(
  router,
  document.getElementById("root")
);
