import React from 'react';
import Typography from '@material-ui/core/Typography';
import Hero from '../Hero/Hero';

const JobGrid = () => {
  return (
    <div>
      <Hero header={false} ></Hero>
      < Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
        No Jobs Posted
      </Typography>
    </div>
  )
}

export default JobGrid;