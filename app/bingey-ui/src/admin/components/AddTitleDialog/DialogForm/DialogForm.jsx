import { useState } from 'react';
// import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';

import {
  TextField,
  DialogContent,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from '@material-ui/core';

import dialogFormStyle from './dialogFormStyle.scss';

export const DialogForm = ({ onFormSubmit }) => {
  const { register, formState, handleSubmit, getValues } = useFormContext();

  const [isMovie, setIsMovie] = useState(false);

  const handleChangeType = () => {
    setIsMovie(!isMovie);
  };

  const errors = formState.errors;

  return (
    <DialogContent>
      <FormControlLabel
        control={
          <Checkbox
            checked={isMovie}
            onChange={handleChangeType}
            name='isMovieCheckbox'
            color='primary'
          />
        }
        label='Create new movie'
      />
      <form onSubmit={handleSubmit(onFormSubmit)} id='dialogForm'>
        <TextField
          label='ID'
          name='id'
          autoComplete
          autoFocus
          inputRef={register({
            required: 'ID is required',
          })}
          error={errors.id}
          helperText={errors.id ? errors.id.message : ''}
          className='smallInput'
        />
        <TextField
          label='Name'
          name='name'
          fullWidth
          inputRef={register({
            required: 'Name is required',
          })}
          error={errors.name}
          helperText={errors.name ? errors.name.message : ''}
        />
        <TextField
          type='date'
          name='releaseDate'
          fullWidth
          margin='normal'
          inputRef={register({
            required: 'Release date is  is required',
          })}
          error={errors.releaseDate}
          helperText={
            errors.releaseDate
              ? errors.releaseDate.message
              : isMovie
              ? 'Release date'
              : 'First episode release date'
          }
        />
        <TextField
          label='Directors'
          name='directors'
          fullWidth
          inputRef={register({
            required: 'Specify at least on director',
          })}
          error={errors.directors}
          helperText={
            errors.directors
              ? errors.directors.message
              : 'Comma separated values'
          }
        />
        <TextField
          label='Genres'
          name='genres'
          fullWidth
          inputRef={register({
            required: 'Specify at least on genre',
          })}
          error={errors.genres}
          helperText={
            errors.genres ? errors.genres.message : 'Comma separated values'
          }
        />
        {!isMovie && (
          <FormGroup row className={'inputGroup'}>
            <TextField
              label='Season count'
              name='seasonCount'
              type='number'
              inputProps={{ min: '1', step: '1' }}
              className='smallInput'
              inputRef={register({
                required: 'Season count is required',
                min: {
                  value: 1,
                  message: 'Count must be greater than zero',
                },
                validate: {
                  integer: (value) =>
                    parseInt(value).toString() === value ||
                    'Season count must be an integer',
                },
              })}
              error={errors.seasonCount}
              helperText={errors.seasonCount ? errors.seasonCount.message : ''}
            />
            <TextField
              label='Episodes per season'
              name='seasonEpisodes'
              helperText='Comma separated values for each season'
              className='smallInput'
              inputRef={register({
                required: 'Season episode count is required',
                validate: {
                  justEnoughEpisodes: (value) =>
                    value.split(',').length == getValues('seasonCount') ||
                    'Specify length of each season',
                },
              })}
              error={errors.seasonEpisodes}
              helperText={
                errors.seasonEpisodes ? errors.seasonEpisodes.message : ''
              }
            />
            <TextField
              helperText='Latest episode release date'
              name='latestReleaseDate'
              type='date'
              className='smallInput'
              inputRef={register({
                required: 'Latest release date is  is required',
              })}
              error={errors.latestReleaseDate}
              helperText={
                errors.latestReleaseDate
                  ? errors.latestReleaseDate.message
                  : 'Latest episode release date'
              }
              margin='normal'
            />
            <TextField
              helperText='Upcoming episode release date'
              name='nextReleaseDate'
              type='date'
              className='smallInput'
              inputRef={register({
                required: 'Next release date is  is required',
              })}
              error={errors.nextReleaseDate}
              helperText={
                errors.nextReleaseDate
                  ? errors.nextReleaseDate.message
                  : 'Next episode release date'
              }
              margin='normal'
            />
          </FormGroup>
        )}

        <TextField
          label='Plot'
          name='plot'
          fullWidth
          inputRef={register({
            required: 'Plot is required',
          })}
          error={errors.plot}
          helperText={errors.plot ? errors.plot.message : ''}
        />
        <TextField
          label='Poster image url'
          name='posterUrl'
          fullWidth
          inputRef={register({
            required: 'Poster image url is required',
          })}
          error={errors.posterUrl}
          helperText={errors.posterUrl ? errors.posterUrl.message : ''}
        />
        <TextField
          label='Similars'
          fullWidth
          helperText='Comma separated IDs'
        />
      </form>
    </DialogContent>
  );
};
