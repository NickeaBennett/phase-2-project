import React from 'react';
import { Container, Grid } from '@mui/material';
// import Post from './Post';
import DataTable from '../components/coins/DataTable';

// const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Home = () => {
  return (
    <Container>
      <Grid container>
        <DataTable />
      </Grid>
    </Container>
  );
};


export default Home;