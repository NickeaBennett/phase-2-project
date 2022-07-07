import MyArticle from './pages/MyArticles';
import NavBar from './components/layout/NavBar';
import React from 'react';
import { Navigate , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import News from './pages/News';
import Layout from './components/layout/Layout';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
        palette: {
            primary: {  
                main: '#f9f9f9'    
                }
        }
})


function App() {
  
     return (   
        <ThemeProvider theme={theme}>
                <Layout>
                <NavBar />
                <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Home" element={<Navigate replace to="/" />} />
                    {/* <Route exact path="home" element={<Home />} /> */}
                    {/* <Route path='/' element={ <Redirect to="/home" /> }/> */}
                    {/* <Route exact path="/home" element={<Redirect to='/' />} /> */}
                    {/* <Route exact path="cryptos" element={<Cryptos />} /> */}
                    <Route exact path="myarticles" element={<MyArticle />} />
                    <Route exact path="news" element={<News />} />
                    {/* <Route render={() => <Navigate to="/" />} /> */}
                </Routes>
                </Layout>
                {/* <Stack direction='row' spacing={2} justifyContent='space-between'>            <Navbar /> */}
                {/* <SideBar/> */}
                {/* <DataTable /> */}
                {/* <Home /> */}
                {/* <RightBar/> */}
                {/* <PageRoutes /> */}
                {/* </Stack> */}
            
        </ThemeProvider>
      

        

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