import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import ThemeProvider from './context/ThemeProvider';

import { store } from '@store/store';
import './styles/index.css';
import App from './containers/App/App';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </BrowserRouter>
);

