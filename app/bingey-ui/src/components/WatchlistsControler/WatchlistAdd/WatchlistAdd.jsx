import React, { useState } from 'react';
import {
  Button,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
  Slide,
  DialogTitle,
  DialogContent,
} from '@material-ui/core';
import DialogUI from '@material-ui/core/Dialog';
import './WatchlistAdd.scss';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useForm } from 'react-hook-form';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export function WatchlistAdd({ onCreateWatchlist, openDrawer }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [watchlistName, setWatchlistName] = useState('');
  const { register, handleSubmit, formState } = useForm();
  const errors = formState.errors;

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const openDialog = () => {
    openDrawer();
    setIsDialogOpen(true);
  };

  const handleInputChange = (e) => {
    setWatchlistName(e.target.value);
  };

  const onSubmit = () => {
    closeDialog();
    onCreateWatchlist(watchlistName);
  };

  return (
    <form id='create-watchlist-form' onSubmit={handleSubmit(onSubmit)}>
      <ListItem button onClick={openDialog} key={'create'}>
        <ListItemIcon>
          <AddCircleIcon />
        </ListItemIcon>
        <ListItemText primary={'New Watchlist'} />
      </ListItem>
      <DialogUI
        open={isDialogOpen}
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
            name='name'
            required={true}
            inputRef={register({
              required: 'Name is required',
            })}
            error={!!errors.name}
            helperText={errors.name ? errors.name.message : ''}
            variant='outlined'
            onChange={handleInputChange}
          />
          <Button
            className={'save-button'}
            type='submit'
            form='create-watchlist-form'
            variant='contained'
            color='primary'
          >
            Save
          </Button>
        </DialogContent>
      </DialogUI>
    </form>
  );
}
