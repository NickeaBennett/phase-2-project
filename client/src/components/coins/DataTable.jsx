import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
 // import DataTable from './datatable/DataTable';


const DataTable = () => {
  const [getCoins, setGetCoins] = useState([])
  
  
  const columns = [
    { field: 'market_cap_rank', headerName: 'Rank', width: 70 },
    { 
      field: 'image', 
      headerName: 'Image', 
      width: 130, 
      renderCell: (params) => <img src={params.value} width='40px' padding='10px'/>
    },
    { field: 'name', headerName: 'Coin', width: 130 },
    { field: 'symbol', headerName: 'Symbol', width: 130 },
    { field: 'current_price', headerName: 'Current Price', type: 'number', width: 130},
    { field: 'market_cap', headerName: 'Market Cap', width: 130},
  ];
  
  useEffect(() => {
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc%2C%20gecko_desc%2C%20gecko_asc%2C%20market_cap_asc%2C%20market_cap_desc%2C%20volume_asc%2C%20volume_desc%2C%20id_asc%2C%20id_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y')
      .then(r => r.json())
      .then(data => setGetCoins(data))
    }, [])
    

  // const rows = [
  //   { id: 1, coinName: 'Bitcoin' , coinSymbol: 'BTC', price: 35, marketCap: 10},
    
  // ];
  
  return (
    <Box flex={4} p={5}>
        <div style={{ height: 700, width: '60%' }}>
        <DataGrid
            rows={getCoins}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
        />
        </div>
    </Box>
  );
}


export default DataTable;