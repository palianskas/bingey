import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Navigation } from '../Navigation/Navigation'
import { TrackerTable } from '../TrackerTable/TrackerTable'
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  main: {
    flexGrow: 1,
    overflow: 'auto',
    marginTop: 64,
  },
  appBarSpacer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  contentContainer: {
    flexGrow: 0,
    padding: theme.spacing(3),
    overflow: 'auto',
  },
  mainTitle: {
    padding: theme.spacing(2),
  },
}));

export const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Navigation
        title={'Bingey'}
      />
      <div class/>
      <main className={classes.main}>
          <div className={classes.contentContainer}>
            <Typography variant='h5' className={classes.mainTitle}>
              <span style={{fontWeight: 'bold'}}>{'My watchlist'}</span>
            </Typography>
            <TrackerTable />
          </div>
      </main>
    </div>
  );
}