import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
 
const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(1),
    marginTop: 'auto',
    backgroundColor: 'white',
  },
}));
 
export default function Footer () {
  const classes = useStyles();
 
  return (
      <footer className={classes.footer}>
        <Container maxWidth="xs">
        <Typography variant="body2" color="textSecondary">
        
        </Typography>
        </Container>
      </footer>
    // </div>
  );
}