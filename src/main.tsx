import React from 'react';

import store from './store/index.ts';
import App from './App.tsx';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
