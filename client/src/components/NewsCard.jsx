import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
import { IconButton, Typography } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Container } from '@mui/system';




export default function NewsCard({ news, HandleFavorite  }) {
  

  
  function HandleFavorite(e) {
    const [addFavNews, setAddFavNews] = useState([]);
    


    // fetch("http://localhost:3001/news", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(itemData),
    // })
    //   .then((r) => r.json())
    //   .then((newItem) => setAddFavNews(newItem));
  }
  

  return (
    <Container>
      {/* {news.title}
      {news.description}
      {news.source}
      {news.title} */}
      <Card elevation={1}>
        <CardHeader 
          action={
            <IconButton >
              <FavoriteBorderOutlinedIcon />
            </IconButton>
          }
          title={news.title}
          subheader={news.description}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {news.source} <br />
            {news.date}
            {/* <img src={news.tags.icon}></img> */}
          </Typography>
        </CardContent>
      </Card>
            
    </Container>
  )
}