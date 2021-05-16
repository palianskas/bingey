import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, Button } from '@material-ui/core';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';

import TitleCard from 'components/Watchlist/TitleCard/TitleCard';
import api from 'utils/api';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
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
}));

export const Watchlist = () => {
  const classes = useStyles();

  const [watchlist, setWatchlist] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const loadWatchlist = async () => {
      setWatchlist(await api.getWatchlistById(id));
    };
    loadWatchlist();
  }, [id]);

  const handleAddTitle = () => {
    document.getElementById('searchBar').focus();
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography variant='h4' className={classes.watchlistName}>
          {watchlist?.name}
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
        {watchlist?.titles?.map((title) => (
          <Grid key={title._id} item xs={12} sm={6} md={4} lg={3} xl={2}>
            <TitleCard title={title} />
          </Grid>
        ))}
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Paper onClick={handleAddTitle} className='card add-title-card'>
            <AddCircleOutlineIcon className='add-title-icon' />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
