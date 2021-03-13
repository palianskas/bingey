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
} from '@material-ui/core';

import { Autocomplete } from '@material-ui/lab';

import addTitleDialogStyle from './addTitleDialogStyle.scss';

export const AddTitleDialog = ({ isOpen, onClose }) => {
  const { register, errors, handleSubmit } = useForm();

  const [isMovie, setIsMovie] = useState(false);

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
            required
            fullWidth
            margin='normal'
            inputRef={register({
              required: 'Release date is  is required',
              pattern: {
                value: '[d, 2]/[d, 2]/[d, 4]/',
                message: 'Invalid date',
              },
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
          <Autocomplete
            multiple
            freeSolo
            id='tags-standard'
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                {...params}
                variant='standard'
                label='Multiple values'
                placeholder='Favorites'
              />
            )}
          />
          <TextField label='Genres' required fullWidth />
          <FormGroup
            row
            className={clsx('inputGroup', {
              ['hidden']: isMovie,
            })}
          >
            <TextField
              label='Season count'
              type='number'
              required
              className='smallInput'
            />
            <TextField
              label='Episodes per season'
              required
              helperText='Comma separated values for each season'
              className='smallInput'
            />
            <TextField
              helperText='Latest episode release date'
              type='date'
              required
              className='smallInput'
            />
            <TextField
              helperText='Upcoming episode release date'
              type='date'
              required
              className='smallInput'
            />
          </FormGroup>
          <TextField label='Plot' required fullWidth />
          <TextField label='Poster image url' required fullWidth />
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
