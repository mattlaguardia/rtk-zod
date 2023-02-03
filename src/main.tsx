import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
// import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import store from './store/store';
import App from './App'
import './index.css'

// console.log(store);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
