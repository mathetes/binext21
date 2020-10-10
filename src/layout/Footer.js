import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
 
const useStyles = makeStyles(theme => ({
  footer: {
    padding: theme.spacing(1),
    marginTop: 'auto',
    backgroundColor: '#3f51b5',
  },
  footerContainer: {
    maxWidth: '200px',
  },
}));
 
export default function Footer() {
  const classes = useStyles();
 
  return (
    <footer className={classes.footer}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item xs={3}>
          <Typography variant="body2" color="textSecondary">
            BiNext © {new Date().getFullYear()}
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
}