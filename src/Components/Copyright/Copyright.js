import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

export default Copyright => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link color="inherit" href="www.nsbedfw.org">NSBE DFW</Link> {new Date().getFullYear()}
    </Typography>
  );
}
