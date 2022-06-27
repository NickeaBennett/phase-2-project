import React from 'react';
import { Box } from '@mui/material';
// import Post from './Post';
import DataTable from '../coins/DataTable';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Home = () => {
  return (
    <Box bgcolor='#FAF9F6' flex={4} p={2}>

      <DataTable />
      
    </Box>
  );
};


export default Home;