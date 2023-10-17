import { createRoot } from 'react-dom/client';
import { GlobalStyle } from './styles/global';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Routes />
    </BrowserRouter>
  </React.StrictMode>,
)
