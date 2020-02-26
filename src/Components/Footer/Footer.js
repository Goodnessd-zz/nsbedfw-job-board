import React from 'react';
import Typography from '@material-ui/core/Typography';
import Copyright from '../Copyright/Copyright'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  }
}));

const Footer = () => {
  const classes = useStyles();
    return( 
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Get Connected!
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Visit us at <a href="/nsbedfw">www.nsbedfw.org</a> to find out more about our chapter.
      </Typography>
      <Copyright />
    </footer>
    )}
 
export default Footer;