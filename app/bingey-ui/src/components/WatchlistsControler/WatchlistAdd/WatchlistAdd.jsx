import React, { useState } from 'react';
import {
  Button,
  DialogContent,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@material-ui/core';
import './WatchlistAdd.scss';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { useForm } from 'react-hook-form';
import { BasicDialog } from 'components/Dialogs/BasicDialog';

export function WatchlistAdd({ onCreateWatchlist, openDrawer }) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [watchlistName, setWatchlistName] = useState('');
  const { register, handleSubmit, formState } = useForm();
  const errors = formState.errors;

  const handleDialogClose = () => {
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
    setIsDialogOpen(false);
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
      <BasicDialog
        dialogTitle={'New Watchlist'}
        isDialogOpen={isDialogOpen}
        onDialogClose={handleDialogClose}
      >
        <DialogContent>
          <div className={'input-container'}>
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
          </div>
        </DialogContent>
      </BasicDialog>
    </form>
  );
}
