import React, { useEffect, useState } from 'react';
import api from 'utils/api';
import { Collapse, ListItemIcon, ListItem } from '@material-ui/core';
import MovieIcon from '@material-ui/icons/Movie';
import ListItemText from '@material-ui/core/ListItemText';
import { withRouter } from 'react-router-dom';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import 'components/Watchlist/WatchlistPicker/WatchlistPicker.scss';

export const WatchlistPicker = withRouter(
  ({ history, openDrawer, isDrawerOpen }) => {
    const [watchlists, setWatchlists] = useState([]);
    const [open, setOpen] = useState(false);

    const handleExpand = () => {
      openDrawer();
      setOpen(!open);
    };

    useEffect(() => {
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

    useEffect(() => {
      setOpen(isDrawerOpen);
    }, [isDrawerOpen]);

    return (
      <div>
        <ListItem button onClick={handleExpand} key={'watchlist'}>
          <ListItemIcon>
            <MovieIcon />
          </ListItemIcon>
          <ListItemText primary={'Watchlist'} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout='auto' unmountOnExit>
          {watchlists.map((watchlist) => (
            <ListItem
              button
              key={watchlist._id}
              className={
                history.location.pathname.includes(watchlist._id)
                  ? 'item-text selected'
                  : 'item-text'
              }
              onClick={() => {
                history.push(`/watchlists/${watchlist._id}`);
              }}
            >
              {watchlist.name}
            </ListItem>
          ))}
        </Collapse>
      </div>
    );
  }
);
