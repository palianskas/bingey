import React from 'react';

import { makeStyles } from '@material-ui/core/styles'

import { Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2),
    margin: 0,
  },
  sizedItem: {
    maxWidth: '100%',
  }
}));

export const InfoDialogContent = ({ titleObj }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid item xs={6}>
          <span style={{fontWeight: 'bold'}}>{'Season 5 episode 8 to be released:'}</span>
        </Grid>
      <Grid item xs={6}>
          <span >{'Unannounced'}</span>
        </Grid>
      <Grid item xs={6}>
        <img className={classes.sizedItem} alt={'title cover'} src='https://m.media-amazon.com/images/M/MV5BMzk2MDk5YzEtZDUzZC00Yjc2LWI1MmYtNzBmMzQ4NmJiNjQwXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_Ratio0.7463_AL_.jpg'/>
      </Grid>
      <Grid item xs={6}>
        <Typography>
          <span style={{fontWeight: 'bold'}}>{'Released: '}</span>
          {titleObj.year}
          </Typography>
        <Typography>
          <span style={{fontWeight: 'bold'}}>{'Directed by: '}</span>
          {titleObj.directors}
          </Typography>
        <Typography>
          <span style={{fontWeight: 'bold'}}>{'Genre: '}</span>
          {titleObj.genre}
          </Typography>
        <Typography>
          <span style={{fontWeight: 'bold'}}>{'Plot: '}</span>
          {titleObj.plot}
        </Typography>
      </Grid>
    </Grid>
  );
};
