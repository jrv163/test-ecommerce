import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import { SearchApp } from './SearchApp';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <SearchApp />
    </BrowserRouter>
  </React.StrictMode>
);
