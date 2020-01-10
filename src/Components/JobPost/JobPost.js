import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const JobPost = ({jobPost}) => {
  return (
    <div className="job-post">
      {jobPost ? (
        <Card style={{margin:"10px auto"}}>
          {/* <CardMedia style={{height: 0, paddingTop: '56.25%'}} */}
          {/* title={jobPost.title}/> */}
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {jobPost.title}
            </Typography>
            <Typography component ="p">
              {jobPost.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary" href={jobPost.url} target="_blank">
              Contact
            </Button>
          </CardActions>
        </Card>
      ):null}
    </div>
  );
}
 
export default JobPost;