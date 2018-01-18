import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById("root")

const wrapApp = (AppComponent, reduxStore) => (
  <BrowserRouter>
    <Provider store={reduxStore}>
      <AppComponent />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(wrapApp(App, store), rootEl)
registerServiceWorker()
