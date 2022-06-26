// import React from 'react';
// import { Stack, Button, Typography } from '@mui/material';
// import HomeIcon from '@mui/icons-material/HomeOutlined';
// // import { Routes, Route } from 'react-router-dom';
// import { Typography } from '@mui/material';
// import CssBaseline from '@mui/material/CssBaseline';
// import { Layout, Typography, Space } from 'antd';
// import { HeartOutlined } from "@ant-design/icons";
// Imports components from index.js

// import ResponsiveAppBar from './components/Nav';
// import Navbar from './components/Nav';
// import { Homepage, Cryptocurrencies, Favorites} from './components/';
import RightBar from './components/RightBar';
import Feed from './components/Feed';
import LeftBar from './components/LeftBar';
import Cryptocurrencies from './components/Cryptocurrencies';
import Favorites from './components/Favorites';

import { Box, Container, Stack } from '@mui/material';

function App() {

     return (   
        <Box>
            <Stack direction='row' spacing={2} justifyContent='space-between'>            {/* <Navbar /> */}
                <LeftBar/>
                <Feed />
                <RightBar/>
            </Stack>
        </Box>
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
    );
}

export default App;



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