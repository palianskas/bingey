import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core';

import 'components/Watchlist/TitleCard/titleCardStyle.scss';
import TitleDialog from 'components/Watchlist/TitleDialog/TitleDialog';

export default function TitleCard({ title }) {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card className='card' elevation={5}>
        <CardActionArea onClick={handleOpenDialog}>
          <CardMedia className='media' image={title.imageUrl} title='Poster' />
          <CardContent>
            <Typography className='center' gutterBottom variant='h5'>
              {title.name}
            </Typography>
            <Typography variant='body1'>
              {title.upcomingItem}: {title.releaseDate}
            </Typography>

            <Typography variant='body1'>Genre: {title.genre}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <TitleDialog open={open} onClose={handleCloseDialog} title={title} />
    </div>
  );
}
