import React from 'react';
import FavoriteCard from '../FavoriteCard';

import { Box } from '@mui/material';

const Favorites = () => {
  return (
    <Box flex={4} p={2}>
       <FavoriteCard />
    </Box>
  );
}

export default Favorites;