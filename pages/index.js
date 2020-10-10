import Head from "next/head";
import Layout from '../src/layout/Layout'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({

  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <div className="container">
      <Head>
        <title>BiNext - онлайн сервис библейских исслодований</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8}>
          <Paper className={classes.paper}>xs=12 sm=8</Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>xs=12 sm=4</Paper>
        </Grid>
      </Grid>
      </Layout>
    </div>
  );
}
