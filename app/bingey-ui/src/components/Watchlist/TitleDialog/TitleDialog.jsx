import React, { useEffect } from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import DialogContentText from '@material-ui/core/DialogContentText';

import 'components/Watchlist/TitleDialog/titleDialogStyle.scss';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import { BasicDialog } from 'components/Dialogs/BasicDialog';

export const TitleDialog = ({ title, onClose, open }) => {
  const handleCloseDialog = () => {
    onClose();
  };

  useEffect(() => {
    console.log(title);
  }, []);

  return (
    <div className='center centerFlex'>
      <BasicDialog
        dialogTitle={title.name}
        isDialogOpen={open}
        onDialogClose={handleCloseDialog}
      >
        <Button
          variant='outlined'
          className='add-button'
          color='primary'
          size='large'
          endIcon={<AddIcon />}
          onClick={() => {}}
        >
          Add title
        </Button>

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
      </BasicDialog>
    </div>
  );
};
