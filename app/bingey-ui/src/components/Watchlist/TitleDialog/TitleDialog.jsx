import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import DialogUI from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import 'components/Watchlist/TitleDialog/titleDialogStyle.scss';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function TitleDialog({ title, onClose, open }) {
  const handleCloseDialog = () => {
    onClose();
  };

  return (
    <div className='center centerFlex'>
      <DialogUI
        open={open}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <div className='header-container'>
          <DialogTitle className='title' disableTypography title={title?.name}>
            {title?.name}
          </DialogTitle>
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
        </div>
        <DialogContent>
          <CardMedia
            className={`center mediaDialog`}
            image={title?.imageUrl}
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
      </DialogUI>
    </div>
  );
}

TitleDialog.propTypes = {
  isDialogOpen: TitleDialog.bool,
};
