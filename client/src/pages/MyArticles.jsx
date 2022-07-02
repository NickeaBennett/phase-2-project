// import { Card } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';
import MyNewsCard from '../components/favorites/MyNewsCard';
import { Button } from '@mui/material';
// import Stack from '@mui/material/Stack';
// import { styled } from '@mui/material/styles';

const MyArticles = () => {
  const [getFavNews, setFavNews] = useState([])
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [source, setSource] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title && description && source) {
      fetch('http://localhost:3001/news', {
        method: 'POST',
        header: {"Content-type": 'application/json'},
        body: JSON.stringify({title, description, source})
      })
    }
  }
  

      useEffect(() => {
        fetch('http://localhost:3001/news')
          .then(r => r.json())
          .then(data => setFavNews(data))
          .catch(err => console.error(err));
      }, [])

  //   function HandleFavorite(e) {
  //     const itemData = { "tags": { "icon": "icon", "name": "name", "symbol": "symbol"} };

  //     fetch("http://localhost:3001/news", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(itemData),
  //     })
  //       .then((r) => r.json())
  //       .then((newItem) => setAddFavNews(newItem));
  // }
       


  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
      >
        Create a crypto article
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField 
        onChange={(e) => setTitle(e.target.value)}
          label='Title'
          variant='outlined'
          fullWidth
          required
        />
        <TextField 
        onChange={(e) => setDescription(e.target.value)}
          label='Description'
          variant='outlined'
          multiline
          rows={4}
          fullWidth
          required
        />
        <TextField 
        onChange={(e) => setSource(e.target.value)}
          label='Source'
          variant='outlined'
          fullWidth
          required
        />
        <Button 
        // onClick={(e) => console.log('You clicked me')}
          type='submit'
          variant="contained"
        >
          Add Article
        </Button>
      </form>

      <Grid container>
        {getFavNews.map(news => (
          <Grid item key={news.id} xs={12} sm={6} md={3}>
            <MyNewsCard news={news} />
          </Grid>
          ))}
      </Grid>
    </Container>
  )
}

export default MyArticles;