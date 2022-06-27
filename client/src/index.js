// import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
// import {theme} from './components/Theme';
import { BrowserRouter } from 'react-router-dom'; 

import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root')
  );
root.render(

    <BrowserRouter>
      <App />
    </BrowserRouter>

);
