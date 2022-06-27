import React from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
 // import DataTable from './datatable/DataTable';

const DataTable = () => {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'coinName', headerName: 'Coin', width: 130 },
    { field: 'coinSymbol', headerName: 'Symbol', width: 130 },
    { field: 'price', headerName: 'Price', type: 'number', width: 90},
    { field: 'marketCap', headerName: 'Market Cap',
      description: 'This column has a value getter and is not sortable.',
      // sortable: false,
      width: 160,
    
    },
  ];
  
  const rows = [
    { id: 1, coinName: 'Bitcoin', coinSymbol: 'BTC', price: 35, marketCap: 10},
    
  ];
  
  return (
    <Box>
        <div style={{ height: 500, width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
        />
        </div>
    </Box>
  );
}


export default DataTable;