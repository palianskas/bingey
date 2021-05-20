import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography, Button } from '@material-ui/core';

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddIcon from '@material-ui/icons/Add';

import TitleCard from 'components/Watchlist/TitleCard/TitleCard';
import api from 'utils/api';
import { sort } from 'utils/sorter';
import { filter } from 'utils/filter';
import { SortRow } from 'components/Watchlist/SortRow/SortRow';
import { FilterRow } from 'components/Watchlist/FilterRow/FilterRow';
import './Watchlist.scss';

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

export const Watchlist = () => {
  const classes = useStyles();

  const [watchlist, setWatchlist] = useState(null);

  const sorters = [
    { id: 'name', name: 'Name' },
    { id: 'releaseDate', name: 'Release Date' },
    { id: 'upcomingReleaseDate', name: 'Upcoming' },
  ];

  const filters = [
    { id: 'genres', name: 'Genres' },
    { id: 'directors', name: 'Directors' },
    { id: 'isMovie', name: 'Type' },
  ];

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

  const handleSorterChange = (field, direction) => {
    if (field) {
      setWatchlist({
        ...watchlist,
        titles: sort(watchlist.titles, [
          { id: field.id, direction: direction },
        ]),
      });
    } else {
      loadWatchlist();
    }
  };

  const handleFiltersChange = (filters) => {
    if (filters.length > 0) {
      // filters.map((filter) =>
      //   filter.id === 'isMovie' ? (filter.value = true) : (filter.value = false)
      // );
      setWatchlist({ ...watchlist, titles: filter(watchlist.titles, filters) });
    } else {
      loadWatchlist();
    }
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
      <div className={'sort-filter-row'}>
        <FilterRow
          filters={filters}
          valuesToFilter={watchlist?.titles}
          onFiltersChange={handleFiltersChange}
        />
        <SortRow sorters={sorters} onActiveSorterChange={handleSorterChange} />
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
