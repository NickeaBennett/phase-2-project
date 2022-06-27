import React, { useEffect, useState } from 'react';

import { 
    Box,
    Card, 
    CardHeader, 
    CardMedia, 
    CardContent, 
    CardActions, 
    Avatar,
    IconButton,
    Typography,
    Checkbox 
  
  } from '@mui/material';
  
  import { red } from '@mui/material/colors';
  import { 
    // Share, 
    Favorite, 
    FavoriteBorder, 
    MoreVert  
  } from '@mui/icons-material';




const Post = () => {
  const [getPost, setPost] = useState([])


  const bull = (
  <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
      •
  </Box>
  );

  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': '586442e325mshf74f712bf9c91fdp184977jsnaf37f0c91999',
          'X-RapidAPI-Host': 'crypto-pulse.p.rapidapi.com'
      }
  };



      useEffect(() => {
        console.log(setPost.data)
        fetch('https://crypto-pulse.p.rapidapi.com/news', options)
          .then(r => r.json())
          .then(data => setPost(data))
          .catch(err => console.error(err));
      }, [])

    
          


  return (
    <Card 
      row
      sx={{margin:5}}
    >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
        <CardMedia
          component="img"
          height="25%"
          image="./assests/full-stack-software-engineer-nickea-bennett.png"
          alt="Paella dish" 
        /> 
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox 
              // {...label} 
              icon={<FavoriteBorder />} 
              checkedIcon={<Favorite sx={{color: 'red'}} />} 
              />
          </IconButton>
          <IconButton aria-label="share">
            {/* <Share /> */}
          </IconButton>
        </CardActions>
      </Card>
  )
}

export default Post;