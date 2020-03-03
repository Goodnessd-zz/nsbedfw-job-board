import React, {useState, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Hero from '../Hero/Hero';
import {content} from '../../utility/emailContent';
import api from '../../utility/api';

const useStyles = makeStyles(theme => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
  }));

const CandidateGrid = () => {
  const classes = useStyles();
  const [jobPosts, setJobPosts] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const response = await api.get("/candidates");
      setJobPosts(response.data);  
    }
    fetchData();
  }, []);

  return <Container className={classes.cardGrid} maxWidth="md">
          <Hero header={false}></Hero>
          <Grid container spacing={4}>
            {jobPosts && jobPosts.map(post => (
              <Grid item key={post.id} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={`https://source.unsplash.com/featured/?${post.industry}`}
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {post.firstName}
                    </Typography>
                    <Typography>
                      {`Looking for ${post.skillLevel} level positions in ${post.industry}.`}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button href={`mailto:${post.email}?subject=${content.subject}&body=${post.firstName}${content.body}`} size="small" color="primary">
                      Contact
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
}
 
export default CandidateGrid;