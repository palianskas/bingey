import React from 'react';
import 'components/Watchlist/TitleDialog/titleDialogStyle.scss';
import AddIcon from '@material-ui/icons/Add';
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
              {title?.upcomingItem}: {title?.releaseDate}
            </Typography>

            <Typography variant='body1' color='text'>
              Rating: {title?.rating}
            </Typography>
          </CardContent>
          <DialogContentText id='alert-dialog-slide-description'>
            {title?.description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant='outlined'
            className='add-button'
            fullWidth
            color='primary'
            size='large'
            endIcon={<AddIcon />}
            onClick={() => {}}
          >
            Add title
          </Button>
        </DialogActions>
      </BasicDialog>
    </div>
  );
};
