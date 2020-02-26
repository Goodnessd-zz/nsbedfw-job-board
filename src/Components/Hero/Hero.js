import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import {Link } from 'react-router-dom';

export const Hero = ({header}) => {
  
  const useStyles = makeStyles(theme => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    routeOptions: {
      marginTop: theme.spacing(4),
    },
  }));
  
  const classes = useStyles();

  return (
  <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                The NSBE DFW Job Board
              </Typography>
              {header &&
              <Typography variant="h5" align="center" color="textSecondary" paragraph>
                The NSBE DFW Professionals Chapter is filled with talented individuals looking for new
                opportunities. We are here to bridge the gap between them and their next job.
              </Typography>
              }
              <div className={classes.routeOptions}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                  <Link to={`/candidates`}>
                    <Button variant="contained" color="primary">
                      View Candidates
                    </Button>
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to={`/jobs`}>
                      <Button variant="outlined" color="primary">
                        View Jobs
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </div>
            </Container>
  </div>
  )};

  export default Hero;