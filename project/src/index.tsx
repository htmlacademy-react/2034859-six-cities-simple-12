import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Settings = {
  cardsCount: 6,
} as const;

root.render(
  <React.StrictMode>
    <App cardsCount={Settings.cardsCount}/>
  </React.StrictMode>,
);
