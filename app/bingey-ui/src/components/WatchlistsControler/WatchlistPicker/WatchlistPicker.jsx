import React, { useEffect, useState } from 'react';
import {
  Collapse,
  ListItemIcon,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import MovieIcon from '@material-ui/icons/Movie';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import './WatchlistPicker.scss';
import Typography from '@material-ui/core/Typography';

export const WatchlistPicker = ({
  history,
  openDrawer,
  isDrawerOpen,
  watchlists,
}) => {
  const [open, setOpen] = useState(false);

  const handleExpand = () => {
    openDrawer();
    setOpen(!open);
  };

  useEffect(() => {
    setOpen(isDrawerOpen);
  }, [isDrawerOpen]);

  return (
    <div>
      <ListItem button onClick={handleExpand} key={'watchlist'}>
        <ListItemIcon>
          <MovieIcon />
        </ListItemIcon>
        <ListItemText primary={'Watchlists'} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        {watchlists.length === 0 ? (
          <Typography
            className='center'
            display='block'
            variant='caption'
            gutterBottom
          >
            You currently have no watchlists
          </Typography>
        ) : (
          watchlists.map((watchlist) => (
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
          ))
        )}
      </Collapse>
    </div>
  );
};
