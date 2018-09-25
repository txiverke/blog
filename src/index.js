import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'

import store from './store'
import App from './App';
import registerServiceWorker from './registerServiceWorker'

const rootEl = document.getElementById("root")

const wrapApp = (AppComponent, reduxStore) => (
  <Router>
    <Provider store={reduxStore}>
      <AppComponent />
    </Provider>
  </Router>
)

ReactDOM.render(wrapApp(App, store), rootEl)

registerServiceWorker()
