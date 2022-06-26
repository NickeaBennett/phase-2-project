import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import {theme} from './components/Theme';
// import { BrowserRouter as Router} from 'react-router-dom'; 

import App from './App';


const root = ReactDOM.createRoot(
  document.getElementById('root')
  );
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> */}
      <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
