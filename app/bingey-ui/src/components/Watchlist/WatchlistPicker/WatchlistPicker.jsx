import React, { useEffect, useState } from 'react';
import api from 'utils/api';
import { Menu, MenuItem } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import MovieIcon from '@material-ui/icons/Movie';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import { withRouter } from 'react-router-dom';

const WatchlistPicker = withRouter(({ history }) => {
  const [watchlists, setWatchlists] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);

  useEffect(() => {
    console.log(window.location.pathname);
    const loadWatchlists = async () => {
      const watchlists = await api.getWatchlists();
      if (
        Object.keys(watchlists).length !== 0 &&
        watchlists.constructor !== Object
      )
        setWatchlists(watchlists);
    };
    loadWatchlists();
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <ListItem
        button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
        key={'watchlist'}
      >
        <ListItemIcon>
          <MovieIcon />
        </ListItemIcon>
        <ListItemText primary={'Watchlist'} />
      </ListItem>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {watchlists.map((watchlist) => (
          <MenuItem
            key={watchlist._id}
            onClick={() => {
              history.push(`/watchlists/${watchlist._id}`);
            }}
          >
            {watchlist.name}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
});

export default WatchlistPicker;
