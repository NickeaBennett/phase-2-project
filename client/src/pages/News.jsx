// import { Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';
import NewsCard from '../components/NewsCard';
import { Container } from '@mui/material';
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

  const [addFavNews, setAddFavNews] = useState([]);
  // function HandleFavorite(e) {
    
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
      
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
      >
        Global Crypto News
      </Typography>
      <Grid container>
        {getNews.map(news => (
          <Grid item key={news.title} xs={12} sm={6} md={3}>
            <NewsCard news={news}  />
          </Grid>
          ))}
      </Grid>
    </Container>
  )
}

export default News;