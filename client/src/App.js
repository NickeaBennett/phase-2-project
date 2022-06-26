import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { Typography } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
// import { Layout, Typography, Space } from 'antd';
// import { HeartOutlined } from "@ant-design/icons";
// Imports components from index.js
import Navbar from './components/Navbar';
// import NavMenu from './components/Navbarjsx';
// import { Homepage, Cryptocurrencies, Favorites} from './components/';

const App = () => (
        <div className='app'>
            <div className="navbar">
                {/* <NavMenu /> */}
            </div>
                {/* Layout component for routing from antd */}
                <div className='routes'>
                    <Routes>
                        <Route exact path="/"></Route>
                        <Route exact path="/cryptocurrencies"></Route>
                        {/* <Route exact path="/exchanges" element={<Exchanges />}></Route> */}
                        {/* <Route exact path="/crypto/:coidId" element={<CoinDetails />}></Route> / */}
                        {/* dynamically render each coin detail coinId stored in variable*/}
                        <Route exact path="/favorites"></Route>
                        {/* <Route exact path="/news" element={<News />}></Route> */}
                    </Routes>
                </div>
          </div>
);

export default App;



// import * as React from 'react';
// // import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import Drawer  from "@mui/material";
// // import { createTheme, ThemeProvider } from "@mui/material";

// // import PersistentDrawerLeft from "./components/drawer/Drawer";
// // import AppBar from '@material-ui/core/AppBar';
// // import Layout from './components/layout/Layout';
// import NavMenu from "./components/navmenu/NavMenu";
// // import DataTable from "./components/datatable/DataTable";
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
//       //           <Route path="/cryptocurency" element={<Cryptocurrency />} />
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