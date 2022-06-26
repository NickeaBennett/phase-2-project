import React from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
// import { HomeIcon, BitcoinIcon } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/HomeOutlined';
import BitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import FavoriteIcon from '@mui/icons-material/FavoriteBorderOutlined';


const LeftBar = () => {
  return (
    // Each media breakpoint (a key) matches with a fixed screen width (a value):
    // https://mui.com/material-ui/customization/breakpoints/#default-breakpoints
    // If device is 0 (xs) display none else if sm and up display the block.
    // (xs, extra-small: 0px sm, small: 600px)

    <Box 
      flex={1} 
      p={2} 
      sx={{display:{xs: 'none', sm: 'block' } }}
      >
      <Box position={'fixed'}>
        <List>
          <ListItem disablePadding>
            <ListItemButton componemt='a' href='#home'>
              <ListItemIcon>
                <HomeIcon color='inherit'/>
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton componemt='a' href='#cryptocurrencies'>
              <ListItemIcon>
                <BitcoinIcon color='inherit'/>
              </ListItemIcon>
              <ListItemText primary='Crypto'/>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton componemt='a' href='#favorites'>
              <ListItemIcon>
                <FavoriteIcon color='inherit'/>
              </ListItemIcon>
              <ListItemText primary='Favorites'/>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default LeftBar;