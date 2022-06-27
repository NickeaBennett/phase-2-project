import React from 'react';
import { Box } from '@mui/material';
// import Post from './Post';
import DataTable from '../coins/DataTable';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Home = () => {
  return (
    <Box flex={4} p={10}>

      <DataTable />
      
    </Box>
  );
};


export default Home;