import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  paper: {
    aspectRatio: 3 / 4,
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#c4c4c4',
  },
  addTitleCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addTitleIcon: {
    height: 'unset',
    width: 'unset',
    opacity: '25%',
  },
}));

export const Watchlist = ({ titles }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid container spacing={2}>
        {titles.map((title) => {
          return (
            <Grid item xs={6} sm={3}>
              <Paper className={classes.paper}>{title.name}</Paper>
            </Grid>
          );
        })}
        <Grid item xs={6} sm={3}>
          <Paper className={clsx(classes.paper, classes.addTitleCard)}>
            <AddCircleOutlineIcon className={classes.addTitleIcon} />
          </Paper>
        </Grid>
      </Grid>
    </Paper>
  );
};
