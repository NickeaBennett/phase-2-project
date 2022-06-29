// import { Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import FavoriteNewsCard from '../components/favorites/FavoriteNewsCard';
// import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';

// import { Box } from '@mui/material';
  
  // import { red } from '@mui/material/colors';
  // import { 
  //   // Share, 
  //   Favorite, 
  //   FavoriteBorder, 
  //   MoreVert  
  // } from '@mui/icons-material';




const News = () => {
  const [getNews, setNews] = useState([])


  // const bull = (
  // <Box
  //     component="span"
  //     sx={{ display: 'inline-block', mx: '5px', transform: 'scale(0.8)' }}
  // >
  //     •
  // </Box>
  // );

  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '586442e325mshf74f712bf9c91fdp184977jsnaf37f0c91999',
          'X-RapidAPI-Host': 'crypto-pulse.p.rapidapi.com'
      }
  };

      useEffect(() => {
        fetch('https://crypto-pulse.p.rapidapi.com/news', options)
          .then(r => r.json())
          .then(data => setNews(data))
          .catch(err => console.error(err));
      }, [])

  return (
    <Container>
      {/* <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>4</Paper>
        </Grid>
      </Grid> */}
      <Grid container spacing={3}>
        {getNews.map(news => (
          <Grid item key={news.description} xs={12} sm={6} md={3}>
            <FavoriteNewsCard news={news} />
          </Grid>
          ))}
      </Grid>
    </Container>
  )
}

export default News;