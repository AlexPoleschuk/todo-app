import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import RootRouter from './routes/RootRouter';

ReactDOM.render(
  <BrowserRouter>
    <RootRouter />
  </BrowserRouter>,
  document.getElementById('root'),
);
