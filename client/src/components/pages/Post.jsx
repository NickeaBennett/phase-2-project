import React from 'react';
import { 
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
  return (
    <Card sx={{margin:5}}>
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
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. Add 1 cup of frozen peas along with the mussels,
            if you like.
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