import React from 'react'

import { makeStyles } from '@material-ui/core/styles';

import Header from './Header';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Layout ({children, ...props}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
                <main>{children}</main>
            <Footer />
        </div>
    )
}