import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import DialogUI from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import 'components/Watchlist/TitleCard/cardStyle.scss';

const useStyles = makeStyles({
  media: {
    height: 260,
  },
});

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function TitleDialog({ titles, onClose, open }) {
  const handleCloseDialog = () => {
    onClose();
  };

  const classes = useStyles();

  return (
    <div className='center centerFlex'>
      <DialogUI
        open={open}
        onClose={handleCloseDialog}
        TransitionComponent={Transition}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle className='center big'>{titles.name}</DialogTitle>
        <DialogContent>
          <CardMedia
            className={`center ${classes.media}`}
            image={titles.image}
            title='Movie poster'
          />
          <CardContent>
            <Typography
              className='inline'
              variant='body1'
              color='text'
              component='p'
            >
              {titles.upcomingItem}: {titles.releaseDate}
            </Typography>

            <Typography className='inline' variant='body1' color='text'>
              Rating: {titles.rating}
            </Typography>
          </CardContent>
          <DialogContentText id='alert-dialog-slide-description'>
            {titles.description}
          </DialogContentText>
        </DialogContent>
      </DialogUI>
    </div>
  );
}

TitleDialog.propTypes = {
  isDialogOpen: TitleDialog.bool,
};
