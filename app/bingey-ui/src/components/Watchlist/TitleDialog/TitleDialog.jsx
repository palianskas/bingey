import React, { useEffect, useState } from 'react';
import {
  Button,
  DialogActions,
  DialogContent,
  CardContent,
  CardMedia,
  Typography,
  DialogContentText,
  Grid,
} from '@material-ui/core';

import api from 'utils/api';

import { BasicDialog } from 'components/Dialogs/BasicDialog';
import { AddTitleToWatchlistController } from 'components/Watchlist/TitleDialog/AddTitleToWatchlist/AddTitleToWatchlistController';

import 'components/Watchlist/TitleDialog/titleDialogStyle.scss';

export const TitleDialog = ({ title, onClose, open }) => {
  const [fullTitle, setFullTitle] = useState(title);

  const handleCloseDialog = () => {
    onClose();
  };

  useEffect(async () => {
    if (!!title) {
      setFullTitle((await api.getTitleById(title?._id)).title);
    }
  }, [open]);

  return (
    <div className='center centerFlex'>
      <BasicDialog
        dialogTitle={fullTitle?.name}
        isDialogOpen={open}
        onDialogClose={handleCloseDialog}
      >
        <Grid className='title-dialog-root' container spacing={3}>
          {fullTitle?.isMovie && (
            <Grid item xs={6}>
              <span>Release date:</span>
            </Grid>
          )}
          {!fullTitle?.isMovie && (
            <Grid item xs={6}>
              <span>{`Season ${fullTitle?.upcomingEpisode?.season} episode ${fullTitle?.upcomingEpisode?.number} coming out: `}</span>
            </Grid>
          )}
          <Grid item xs={6}>
            <span className='bold'>
              {fullTitle?.isMovie
                ? fullTitle?.releaseDate.split('T')[0]
                : fullTitle?.upcomingEpisode?.releaseDate.split('T')[0]}
            </span>
          </Grid>
          <Grid item xs={6}>
            <img
              className='title-dialog-image'
              alt={`${fullTitle?.name} poster`}
              src={fullTitle?.imageUrl}
            />
          </Grid>
          <Grid item xs={6}>
            {!fullTitle?.isMovie && (
              <Typography className='title-dialog-field-container'>
                <span>Released: </span>
                <br />
                <span className='bold'>
                  {fullTitle?.releaseDate.split('T')[0]}
                </span>
              </Typography>
            )}
            <Typography className='title-dialog-field-container'>
              <span>Directed by: </span>
              <br />
              <span className='bold'>
                {fullTitle?.directors?.map(
                  (director, index, directors) =>
                    `${director}${index != directors.length - 1 ? ', ' : ''}`
                )}
              </span>
            </Typography>
            <Typography className='title-dialog-field-container'>
              <span>Genres: </span>
              <br />
              <span className='bold'>
                {fullTitle?.genres?.map(
                  (genre, index, genres) =>
                    `${genre}${index != genres.length - 1 ? ', ' : ''}`
                )}
              </span>
            </Typography>
            <Typography className='title-dialog-field-container'>
              <span>Plot: </span>
              <br />
              <span className='bold'>{fullTitle?.plot} </span>
            </Typography>
          </Grid>
        </Grid>
        <DialogActions>
          <AddTitleToWatchlistController title={fullTitle} />
        </DialogActions>
      </BasicDialog>
    </div>
  );
};
