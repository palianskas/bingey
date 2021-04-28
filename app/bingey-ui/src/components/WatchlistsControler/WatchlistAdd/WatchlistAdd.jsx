import React, { useState } from 'react';
import {
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogUI from '@material-ui/core/Dialog';
import './WatchlistAdd.scss';
import AddCircleIcon from '@material-ui/icons/AddCircle';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export function WatchlistAdd({ onCreateWatchlist, openDrawer }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [watchlistName, setWatchlistName] = useState('');

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const openDialog = () => {
    openDrawer();
    setDialogOpen(true);
  };

  const handleInputChange = (e) => {
    setWatchlistName(e.target.value);
  };

  return (
    <>
      <ListItem button onClick={openDialog} key={'create'}>
        <ListItemIcon>
          <AddCircleIcon />
        </ListItemIcon>
        <ListItemText primary={'New Watchlist'} />
      </ListItem>
      <DialogUI
        open={dialogOpen}
        onClose={closeDialog}
        TransitionComponent={Transition}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <div className='header-container'>
          <DialogTitle className='title'>New Watchlist</DialogTitle>
        </div>
        <DialogContent className={'input-container'}>
          <TextField
            id='outlined-basic'
            label='Name'
            variant='outlined'
            onChange={handleInputChange}
          />
          <Button
            className={'save-button'}
            onClick={() => {
              onCreateWatchlist(watchlistName);
              closeDialog();
            }}
            variant='contained'
            color='primary'
          >
            Save
          </Button>
        </DialogContent>
      </DialogUI>
    </>
  );
}
