import { AppBar, Toolbar, styled, Typography, InputBase } from '@mui/material';
import BitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
// import Autocomplete from '@mui/material/Autocomplete';

import React from 'react';

const StyleToolbar = styled(Toolbar) ({
  display: "flex",
  justifyContent: "space-between",
})

const Search = styled('div')(({ theme }) => ({
  backgroundColor: '#FFFF',
  padding: '0 10px',
  borderRadius: theme.shape.borderRadius,
  width:  '40%'

}));


const Icons = styled('Box') (({ theme }) => ({
  backgroundColor: '#FFFF',
}));

const NavBar = () => {
  return (
    <AppBar position='sticky'>
      <StyleToolbar>
        <BitcoinIcon sx={{display:{xs:'block', sm:'none'}}} />
        <Typography  variant='h6' component='h1' sx={{display: {xs: 'none', sm:'block'}}} >
          React Crypto Market App
        </Typography>
        <Search><InputBase placeholder='Search crypto coins...' /></Search>
      </StyleToolbar>
    </AppBar>
  );

  
};

export default NavBar;
