import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import {
  TextField,
  DialogContent,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
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
      <form onSubmit={handleSubmit(onFormSubmit)} id='dialogForm'>
        <FormControlLabel
          control={
            <Checkbox
              checked={isMovie}
              onChange={handleChangeType}
              color='primary'
            />
          }
          name='isMovie'
          inputRef={register}
          label='Create new movie'
        />
        <br />
        <TextField
          label='ID'
          name='_id'
          autoComplete
          autoFocus
          fullWidth
          inputRef={register({
            required: 'ID is required',
          })}
          error={errors.id}
          helperText={errors.id ? errors.id.message : ''}
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
          <FormGroup row className='input-group'>
            <TextField
              label='Season count'
              name='seasonCount'
              type='number'
              inputProps={{ min: '1', step: '1' }}
              className='small-input'
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
              className='small-input'
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
            <div class='episode-input-group small-input'>
              <Typography variant='h6'>Latest episode</Typography>
              <TextField
                label='Season'
                name='latestEpisode.season'
                type='number'
                inputProps={{ min: '1', step: '1' }}
                inputRef={register({
                  required: 'Season is required',
                  min: {
                    value: 1,
                    message: 'Count must be greater than zero',
                  },
                  validate: {
                    integer: (value) =>
                      parseInt(value).toString() === value ||
                      'Season must be an integer',
                  },
                })}
                error={errors.seasonCount}
                helperText={
                  errors.seasonCount ? errors.seasonCount.message : ''
                }
              />
              <TextField
                label='Number'
                name='latestEpisode.number'
                type='number'
                inputProps={{ min: '1', step: '1' }}
                inputRef={register({
                  required: 'Number is required',
                  min: {
                    value: 1,
                    message: 'Number must be greater than zero',
                  },
                  validate: {
                    integer: (value) =>
                      parseInt(value).toString() === value ||
                      'Number must be an integer',
                  },
                })}
                error={errors.seasonCount}
                helperText={
                  errors.seasonCount ? errors.seasonCount.message : ''
                }
              />
              <TextField
                helperText='Release date'
                name='latestEpisode.releaseDate'
                type='date'
                inputRef={register({
                  required: 'Release date is  is required',
                })}
                error={errors.latestReleaseDate}
                helperText={
                  errors.latestReleaseDate
                    ? errors.latestReleaseDate.message
                    : 'Release date'
                }
                margin='normal'
              />
            </div>
            <div class='episode-input-group small-input'>
              <Typography variant='h6'>Next episode</Typography>
              <TextField
                label='Season'
                name='upcomingEpisode.season'
                type='number'
                inputProps={{ min: '1', step: '1' }}
                inputRef={register({
                  required: 'Season is required',
                  min: {
                    value: 1,
                    message: 'Count must be greater than zero',
                  },
                  validate: {
                    integer: (value) =>
                      parseInt(value).toString() === value ||
                      'Season must be an integer',
                  },
                })}
                error={errors.seasonCount}
                helperText={
                  errors.seasonCount ? errors.seasonCount.message : ''
                }
              />
              <TextField
                label='Number'
                name='upcomingEpisode.number'
                type='number'
                inputProps={{ min: '1', step: '1' }}
                inputRef={register({
                  required: 'Number is required',
                  min: {
                    value: 1,
                    message: 'Number must be greater than zero',
                  },
                  validate: {
                    integer: (value) =>
                      parseInt(value).toString() === value ||
                      'Number must be an integer',
                  },
                })}
                error={errors.seasonCount}
                helperText={
                  errors.seasonCount ? errors.seasonCount.message : ''
                }
              />
              <TextField
                helperText='Release date'
                name='upcomingEpisode.releaseDate'
                type='date'
                inputRef={register({
                  required: 'Release date is  is required',
                })}
                error={errors.latestReleaseDate}
                helperText={
                  errors.latestReleaseDate
                    ? errors.latestReleaseDate.message
                    : 'Release date'
                }
                margin='normal'
              />
            </div>
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
          name='imageUrl'
          fullWidth
          inputRef={register({
            required: 'Poster image url is required',
          })}
          error={errors.imageUrl}
          helperText={errors.imageUrl ? errors.imageUrl.message : ''}
        />
        <TextField
          label='Similars'
          name='similars'
          inputRef={register}
          fullWidth
          helperText='Comma separated IDs'
        />
      </form>
    </DialogContent>
  );
};
