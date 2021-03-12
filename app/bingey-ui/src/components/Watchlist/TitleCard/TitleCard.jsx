import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './cardStyle.scss';
import TitleDialog from './TitleDialog';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 25,
  },
  media: {
    height: 260,
  },
});

export default function TitleCard({
  title,
  upcomingItem,
  releaseDate,
  description,
  image,
  rating,
}) {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleClickOpen}>
        <CardMedia
          className={classes.media}
          image={image}
          title='Movie poster'
        />
        <CardContent>
          <Typography
            className='center'
            gutterBottom
            variant='h5'
            component='h2'
          >
            {title}
          </Typography>
          <Typography
            className='inline'
            variant='body1'
            color='text'
            component='p'
          >
            {upcomingItem} <span className='right'> {releaseDate}</span>
          </Typography>

          <Typography
            className='justify'
            variant='body2'
            color='text'
            component='p'
          >
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <TitleDialog
        open={open}
        onClose={handleClose}
        image={image}
        title={title}
        upcomingItem={upcomingItem}
        releaseDate={releaseDate}
        description={description}
        rating={rating}
      />
    </Card>
  );
}
