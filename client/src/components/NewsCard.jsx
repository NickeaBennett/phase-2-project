import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
import { IconButton, Typography } from '@mui/material';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


export default function NewsCard({ news }) {
  console.log(news)
  return (
    <div>
      {/* {news.title}
      {news.description}
      {news.source}
      {news.title} */}
      <Card elevation={10}>
        <CardHeader 
          action={
            <IconButton onClick={() => console.log('Loved', news.title)}>
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
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}