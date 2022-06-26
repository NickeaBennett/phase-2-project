import React from 'react'
import { Box } from '@mui/material';

const RightBar = () => {
  return (
    // flex layout. p fpr pading
    <Box bgcolor='violet' flex={2} p={2} sx={{display:{xs: 'none', sm: 'block' } }}>
      Right Bar
      </Box>
  );
}

export default RightBar;