import React from 'react';
import 'components/Watchlist/TitleDialog/titleDialogStyle.scss';
import {
  Button,
  DialogActions,
  DialogContent,
  CardContent,
  CardMedia,
  Typography,
  DialogContentText,
} from '@material-ui/core';
import { BasicDialog } from 'components/Dialogs/BasicDialog';
import { AddTitleToWatchlistController } from 'components/Watchlist/TitleDialog/AddTitleToWatchlist/AddTitleToWatchlistController';

export const TitleDialog = ({ title, onClose, open }) => {
  const handleCloseDialog = () => {
    onClose();
  };

  return (
    <div className='center centerFlex'>
      <BasicDialog
        dialogTitle={title.name}
        isDialogOpen={open}
        onDialogClose={handleCloseDialog}
      >
        <DialogContent>
          <CardMedia
            className={`center mediaDialog`}
            image={title.imageUrl}
            title='Poster'
          />
          <CardContent>
            <Typography variant='body1' color='text' component='p'>
              {title.upcomingItem}: {title.releaseDate}
            </Typography>

            <Typography variant='body1' color='text'>
              Rating: {title.rating}
            </Typography>
          </CardContent>
          <DialogContentText id='alert-dialog-slide-description'>
            {title.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <AddTitleToWatchlistController title={title} />
        </DialogActions>
      </BasicDialog>
    </div>
  );
};
