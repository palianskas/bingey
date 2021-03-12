import React from 'react';
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
    aspectRatio: 5 / 7,
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
    maxWidth: 345,
    margin: 25,
    height: 400,
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
        >
          Add title
        </Button>
      </div>
      <Grid container spacing={0}>
        {titles.map((title) => {
          return (
            <Grid item xs={6} sm={4} md={3} xl={2}>
              <TitleCard
                title={title.name}
                upcomingItem='2 season 3 episode'
                releaseDate='2021 05 03'
                description='When all people die... How do you survive? Magic story about Elena...'
                image='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/movie-poster-template-design-21a1c803fe4ff4b858de24f5c91ec57f_screen.jpg?ts=1574144362'
                rating='5 stars'
              />
            </Grid>
          );
        })}
        <Grid item xs={6} sm={4} md={3} xl={2}>
          <Paper className={clsx(classes.addTitleCard)}>
            <AddCircleOutlineIcon className={classes.addTitleIcon} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
