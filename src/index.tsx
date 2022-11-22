import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.scss';

const rootContainer = document.querySelector('#root');

if (!rootContainer) {
  throw Error('Cannot find the root container!');
}

const root = createRoot(rootContainer);

root.render(
  <React.StrictMode>
    <Router basename="/learning-css-animations">
      <App />
    </Router>
  </React.StrictMode>
);
