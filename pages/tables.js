import Head from "next/head";
import Layout from "../src/layout/Layout";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TableList from "../src/components/TableList";
import Patriarch from "../src/components/tablesdb/patriarch";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "left",
    color: theme.palette.text.secondary,
    fontSize: "2rem",
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
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <Patriarch />
            </Paper>
          </Grid>
        </Grid>
      </Layout>
    </div>
  );
}
