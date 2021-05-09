import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

import { TitleDialog } from 'components/Watchlist/TitleDialog/TitleDialog';

import './titleCardStyle.scss';

export default function TitleCard({ title }) {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  // TODO redesign add-title card too

  return (
    <div>
      <Card className='card' elevation={3}>
        <CardActionArea onClick={handleOpenDialog} className='card-action-area'>
          <CardMedia
            component='img'
            alt={`${title?.name} poster`}
            image={title?.imageUrl}
            title={`${title?.name} poster`}
            className='card-media'
          />
          <CardContent className='card-content'>
            <Typography variant='h6'>{title?.name}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <TitleDialog open={open} onClose={handleCloseDialog} title={title} />
    </div>
  );
}
