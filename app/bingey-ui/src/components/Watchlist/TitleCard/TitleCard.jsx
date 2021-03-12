import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import 'components/Watchlist/TitleCard/cardStyle.scss';

export default function TitleCard({ titles }) {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card>
        <CardActionArea onClick={handleOpenDialog}>
          <CardMedia
            className='media'
            style={{ paddingTop: '60%' }}
            image={titles.image}
            title='Movie poster'
          />
          <CardContent>
            <Typography className='center' gutterBottom variant='body1'>
              {titles.name}
            </Typography>
            <Typography className='inline' variant='body1' color='text'>
              {titles.upcomingItem}: {titles.releaseDate}
            </Typography>

            <Typography variant='body1'>Genre: {titles.genre}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
