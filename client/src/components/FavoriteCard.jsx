import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function FavoriteCard() {
    // const [getPosts, setPost] = useState([])


    const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
    );

    // const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Key': '586442e325mshf74f712bf9c91fdp184977jsnaf37f0c91999',
    //     'X-RapidAPI-Host': 'crypto-pulse.p.rapidapi.com'
    //   }
    // };


    //     useEffect(() => {
    //         fetch('https://crypto-pulse.p.rapidapi.com/news', options)
    //         .then(r => r.json())
    //         .then(data => console.log('News:', data))
    //         .catch(err => console.error(err));
    //     }, [])

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}


export default FavoriteCard;