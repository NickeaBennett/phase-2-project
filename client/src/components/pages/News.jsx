import React from 'react';
import { Box } from '@mui/material';
import Post from '../Post';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const News = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
    </Box>
  );
};


export default News;