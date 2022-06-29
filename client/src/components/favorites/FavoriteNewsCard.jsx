import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
import { Container, IconButton, Typography } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';




export default function FavoriteNewsCard({ news }) {
  console.log(news)
  return (
    <Container>
      {/* {news.title}
      {news.description}
      {news.source}
      {news.title} */}
      <Card elevation={10}>
        <CardHeader 
          action={
            <IconButton onClick={() => console.log('delete', news.title)}>
              <DeleteOutlinedIcon />
            </IconButton>
          }
          title={news.title}
          subheader={news.description}
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary'>
            {news.source} <br />
            {news.date}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  )
}