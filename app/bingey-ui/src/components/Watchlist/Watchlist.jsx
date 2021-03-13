import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, Button } from '@material-ui/core';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';

import TitleCard from 'components/Watchlist/TitleCard/TitleCard';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  paper: {
    textAlign: 'center',
    backgroundColor: '#c4c4c4',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  watchlistName: {
    fontWeight: 'bold',
    padding: theme.spacing(2, 0),
  },
  addTitleHeaderButton: {
    margin: theme.spacing(2, 0),
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  addTitleCard: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: 5 / 7,
    cursor: 'pointer',
  },
  addTitleIcon: {
    height: 'unset',
    width: 'unset',
    opacity: '25%',
  },
}));

export const Watchlist = ({ titles }) => {
  const classes = useStyles();

  const [titleData, setTitleData] = useState(titles);

  const handleAddTitle = () => {
    document.getElementById('searchBar').focus();
    setTitleData((titleData) => [...titleData, { name: 'new title name' }]);
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant='h4' className={classes.watchlistName}>
          My Watchlist
        </Typography>
        <Button
          variant='outlined'
          color='primary'
          size='large'
          className={classes.addTitleHeaderButton}
          endIcon={<AddIcon />}
          onClick={handleAddTitle}
        >
          Add title
        </Button>
      </div>
      <Grid container spacing={2}>
        {titleData.map((title) => {
          return (
            <Grid item xs={6} sm={4} md={3} xl={2}>
              <TitleCard title={title} />
            </Grid>
          );
        })}
        <Grid item xs={6} sm={4} md={3} xl={2}>
          <Paper
            onClick={handleAddTitle}
            className={clsx(classes.paper, classes.addTitleCard)}
          >
            <AddCircleOutlineIcon className={classes.addTitleIcon} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
