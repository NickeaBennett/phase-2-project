import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
import { Container, IconButton, Typography } from '@mui/material';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


function FavoriteNewsCard({ news }) {
  

    const handleDelete = (news) => {
        // await fetch(`http://localhost:8000/news/${id}`, {
        //   method: "DELETE"
      // })
      // console.log (news)
     
    }
    
    return (
      <Container>
      
        <Card elevation={1}>
          <CardHeader 
            action={
              <IconButton onClick={handleDelete}>
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
export default FavoriteNewsCard;