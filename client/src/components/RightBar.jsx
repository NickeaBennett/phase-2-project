import React from 'react'
import { Box, Typography } from '@mui/material';

const RightBar = () => {
  return (
    // flex layout. p fpr pading
    <Box flex={1} p={2} sx={{display:{xs: 'none', sm: 'block' } }}>
      <Box position={'fixed'}>
        <Typography>
          Top Ten Coins
        </Typography >
      </Box>
    </Box>
  );
}

export default RightBar;