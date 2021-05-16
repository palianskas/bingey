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

  return (
    <div>
      <Card className='card' elevation={0}>
        <CardActionArea onClick={handleOpenDialog} className='card-action-area'>
          <CardMedia
            component='img'
            alt={`${title?.name} poster`}
            image={title?.imageUrl}
            title={`${title?.name} poster`}
            className='card-media'
          />
          <CardContent className='card-content'>
            <Typography
              variant='h6'
              noWrap
              title={title?.name}
              className='card-content-name'
            >
              {title?.name}
            </Typography>
            {!!title?.upcomingEpisode ? (
              <Typography
                variant='subtitle1'
                className='card-content-release-date'
              >
                Next episode release date:
                <strong>{` ${
                  title?.upcomingEpisode?.releaseDate.split('T')[0]
                }`}</strong>
              </Typography>
            ) : (
              <Typography
                variant='subtitle1'
                className='card-content-release-date'
              >
                Release date:
                <strong>{` ${title?.releaseDate.split('T')[0]}`}</strong>
              </Typography>
            )}
            <Typography
              variant='subtitle2'
              className='card-content-genres'
              noWrap
            >
              {title?.genres?.map(
                (genre, index, genres) =>
                  `${genre}${index != genres.length - 1 ? ', ' : ''}`
              )}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <TitleDialog open={open} onClose={handleCloseDialog} title={title} />
    </div>
  );
}
