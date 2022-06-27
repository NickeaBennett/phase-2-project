import React from 'react';
import { Box } from '@mui/material';
 import DataTable from '../coins/DataTable';

const Cryptos = () => {
  
  return (
    <Box flex={4} p={10}>
      <DataTable />
    </Box>
  );
}


export default Cryptos;