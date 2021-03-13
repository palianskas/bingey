import { useState } from 'react';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

import {
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Chip,
} from '@material-ui/core';

import addTitleDialogStyle from './addTitleDialogStyle.scss';

export const AddTitleDialog = ({ isOpen, onClose }) => {
  const { register, errors, handleSubmit, getValues } = useForm();

  const [isMovie, setIsMovie] = useState(false);

  // const [directors, setDirectors] = useState([{ name: 'test dir' }]);

  const handleClose = () => {
    onClose(false);
  };

  const handleChangeType = () => {
    setIsMovie(!isMovie);
  };

  const onFormSubmit = () => {
    console.log('form submitted');
    console.log(errors);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'
      fullWidth
    >
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <DialogTitle id='form-dialog-title'>
          <Typography variant='h5' style={{ fontWeight: 600 }}>
            Create new title
          </Typography>
        </DialogTitle>
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
          <br />
          <TextField
            label='ID'
            name='id'
            required
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
            required
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
            required
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
          {/* could't figure out how to validate autocomplete. Using roc Controller failed 
          <Autocomplete
            multiple
            freeSolo
            options={[]}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip label={option} {...getTagProps({ index })} />
              ))
            }
            renderInput={(params) => (
              <TextField
                error={errors.directors}
                helperText={errors.directors ? errors.directors.message : ''}
                variant='filled'
                label='Directors'
                {...params}
              />
            )}
            name='directors'
            inputRef={register({
              validate: {
                required: (value) => value || 'Specify at least on director',
              },
            })}
          /> */}

          <TextField
            label='Genres'
            required
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
          <FormGroup
            row
            className={clsx('inputGroup', {
              ['hidden']: isMovie,
            })}
          >
            <TextField
              label='Season count'
              name='seasonCount'
              type='number'
              inputProps={{ min: '1', step: '1' }}
              required
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
              required
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
              required
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
              required
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

          <TextField
            label='Plot'
            name='plot'
            required
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
            required
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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='primary'>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit(onFormSubmit)}
            type='submit'
            variant='contained'
            color='primary'
          >
            Create
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
