import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootEl = document.getElementById('root')

const wrapApp = (AppComponent) => (
  <BrowserRouter>
    <AppComponent />
  </BrowserRouter>
)

ReactDOM.render(wrapApp(App), rootEl);
registerServiceWorker();
