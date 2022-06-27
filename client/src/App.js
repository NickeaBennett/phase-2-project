// import { Stack, Button, Typography } from '@mui/material';
// import HomeIcon from '@mui/icons-material/HomeOutlined';
// import { Typography } from '@mui/material';
// import CssBaseline from '@mui/material/CssBaseline';
// import { Layout, Typography, Space } from 'antd';
// import { HeartOutlined } from "@ant-design/icons";
// Imports components from index.js

// import ResponsiveAppBar from './components/Nav';
// import Navbar from './components/Nav';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/layout/NavBar';
// import SideBar from './components/layout/SideBar';
// import RightBar from './components/layout/RightBar';

import Home from './components/pages/Home';
import Cryptos from './components/pages/Cryptos';
import Favorites from './components/pages/Favorites';
import News from './components/pages/News';


// import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
// import PageRoutes from './components/pages/PageRoutes';
// import DataTable from './components/coins/DataTable';

const API_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc%2C%20gecko_desc%2C%20gecko_asc%2C%20market_cap_asc%2C%20market_cap_desc%2C%20volume_asc%2C%20volume_desc%2C%20id_asc%2C%20id_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y'


function App() {
    const [getCoins, setGetCoins] = useState([])
    
        useEffect(() => {
            fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc%2C%20gecko_desc%2C%20gecko_asc%2C%20market_cap_asc%2C%20market_cap_desc%2C%20volume_asc%2C%20volume_desc%2C%20id_asc%2C%20id_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y', {
                headers: {
                    'accept': 'application/json'
                }
            })

    },[])


     return (   
        <div className='App'>
            <NavBar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                {/* <Route exact path="home" element={<Home />} /> */}
                <Route exact path="cryptos" element={<Cryptos />} />
                <Route exact path="favorites" element={<Favorites />} />
                <Route exact path="news" element={<News />} />
            </Routes>
            {/* <Stack direction='row' spacing={2} justifyContent='space-between'>            <Navbar /> */}
            {/* <SideBar/> */}
            {/* <DataTable /> */}
            {/* <Home /> */}
            {/* <RightBar/> */}
            {/* <PageRoutes /> */}
            {/* </Stack> */}

               
        </div>

        

);
}

export default App;


// <div className='App'>
//     <h1>Hello World</h1>
//     <Stack spacing={2} direction="row">
//         <Button variant="text">Text</Button>
//         <Button 
//             startIcon={<HomeIcon />} 
//             variant='contained'
//             color='otherColor'
//             size='small'
//             >
//                 Contained
//         </Button>
//         <Button variant="outlined">Outlined</Button>
//     </Stack>
//     <div>
//         <Typography variant="h1" component="h2">
//             h1. Heading
//         </Typography>;
//     </div>
// </div>

// import * as React from 'react';
// // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import Drawer  from "@mui/material";
// // import { createTheme, ThemeProvider } from "@mui/material";

// // import PersistentDrawerLeft from "./components/drawer/Drawer";
// // import AppBar from '@material-ui/core/AppBar';
// // import Layout from './components/layout/Layout';
// import NavMenu from "./components/navMenu/NavMenu";
// // import DataTable from "./components/dataTable/DataTable";
// // import { makeStyles } from "@mui/material/styles";
// import { Routes, Route } from "react-router-dom";
// // import { HomeIcon } from "./components/layout/Layout";
// // import './App.css';
// // import Button from '@mui/material/Button';
// // import Stack from '@mui/material/Stack';
// // import { makeStyles } from "@mui/styles";
// import { 
//     Typography,
//     AppBar,
//     Card,
//     CardActions,
//     CardContent, 
//     CardMedia,
//     CssBaseline,
//     Grid,
//     Toolbar,
//     Button, 
//     Stack, 
//     Container
//      } from '@mui/material';
// // import Layout from './components/layout/Layout';
//     //  import HomeIcon from '@material-ui/icons/Home';
//     //  import HomeIcon from '@material-ui/icons/Home';
//     // import {HomeOutlinedIcon} from '@mui/icons-material';

// import Homepage from "./components/homepage/Homepage";
// import Cryptocurrency from "./components/cryptocurrency/Cryptocurrency";
// import Favorites from "./components/favorites/Favorites";

// // Creating a hook (useStyles) equal to (makeStyles) functions with  a callback function that returns an object
// // const useStyles = makeStyles((theme) => ({
// //   container: {
// //     backgroundGround: theme.pallette.background.paper,
// //     padding: theme.spacing(8, 0, 6)
// //   }
// // }));


// const App = () => {
//   // const classes = useStyles();

//   return (
//     <div>
//       <div>
//        <NavMenu />
//       </div>
        
//         {/* <CssBaseline /> */}
//             {/* Cannot get icon to show */}
//             {/* <HomeIcon /> */}
//             {/* <HomeOutlinedIcon />   */}
            
//             {/* <Stack direction="row" spacing={2}>
//               <Button color="inherit">Home</Button>
//               <Button color="inherit">Cryptocurrency</Button>
//               <Button color="inherit">Favorites</Button>
//             </Stack> */}
//       <main>
//           <div>
//             {/* <DataTable /> */}
            
//           </div>
//       </main>
//       //       <div className="Routes">
//       //         <Routes>
//       //           <Route path="/" element={<Homepage />} />
//       //           <Route path="/cryptocurrency" element={<Cryptocurrency />} />
//       //           <Route path="/favorites" element={<Favorites />} />
//       //         </Routes>
//               </div>
//     </div>
//   );
// }
  
//   export default App;
//         // <div className="App">
//         //   <div className="Layout">
//         //     {/* <Layout /> */}
//         //     {/* <Drawer /> */}
//         //     {/* <Layout /> */}
//   //     <div className="Main">
//   //       <Typography variant="h1">Hello World!</Typography>
//   //       </div>
//   //       <div className="Footer">

//   //       </div>
//   //   </div>
//   //   </div>
//   // </div>