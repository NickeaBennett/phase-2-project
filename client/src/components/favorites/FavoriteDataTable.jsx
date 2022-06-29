import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
 // import DataTable from './datatable/DataTable';
 


// Get request from Json Server


const FavoriteDataTable = () => {
  const [getFavCoins, setGetFavCoins] = useState([])
  
  
  const columns = [
    { field: 'market_cap_rank', headerName: 'Rank', width: 50 },
    { 
      field: 'image', 
      headerName: '', 
      width: 70, 
      renderCell: (params) => <img src={params.value} width='40px' padding='10px'/>,
    },
    { field: 'name', headerName: 'Coin', width: 130 },
    { field: 'symbol', headerName: 'Symbol', width: 130 },
    { 
    
      field: 'current_price', 
      headerName: 'Current Price', 
      type: 'number', 
      width: 130
    },
    { field: 'market_cap', headerName: 'Market Cap', width: 130},
  ];
  
  useEffect(() => {
      fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc%2C%20gecko_desc%2C%20gecko_asc%2C%20market_cap_asc%2C%20market_cap_desc%2C%20volume_asc%2C%20volume_desc%2C%20id_asc%2C%20id_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y')
      .then(r => r.json())
      .then(data => setGetFavCoins(data))
    }, [])
    

  // const rows = [
  //   { id: 1, coinName: 'Bitcoin' , coinSymbol: 'BTC', price: 35, marketCap: 10},
    
  // ];
  
  return (
    <Box flex={12} p={5}>
        <div style={{ height: 700, width: '60%' }}>
        <DataGrid
            rows={getFavCoins}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
            checkboxSelection
        />
        </div>
    </Box>
  );
}


export default FavoriteDataTable;



// import React, { useEffect, useState } from 'react';

// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// function FavoriteCard() {
//     // const [getPosts, setPost] = useState([])


//     const bull = (
//     <Box
//         component="span"
//         sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
//     >
//         •
//     </Box>
//     );

//     //


//     //     useEffect(() => {
//     //         fetch('https://crypto-pulse.p.rapidapi.com/news', options)
//     //         .then(r => r.json())
//     //         .then(data => console.log('News:', data))
//     //         .catch(err => console.error(err));
//     //     }, [])

//   return (
//     <Card sx={{ minWidth: 275 }}>
//       <CardContent>
//         <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//           Word of the Day
//         </Typography>
//         <Typography variant="h5" component="div">
//           be{bull}nev{bull}o{bull}lent
//         </Typography>
//         <Typography sx={{ mb: 1.5 }} color="text.secondary">
//           adjective
//         </Typography>
//         <Typography variant="body2">
//           well meaning and kindly.
//           <br />
//           {'"a benevolent smile"'}
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button size="small">Learn More</Button>
//       </CardActions>
//     </Card>
//   );
// }