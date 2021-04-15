import { useForm, FormProvider } from 'react-hook-form';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  Typography,
} from '@material-ui/core';

import api from 'utils/api';
import { DialogForm } from 'admin/components/AddTitleDialog/DialogForm/DialogForm';

const formatFormData = (data) => {
  data.directors = data.directors.split(',').map((dir) => dir.trim());
  data.genres = data.genres.split(',').map((genre) => genre.trim());
  data.seasonEpisodes = data.seasonEpisodes?.split(',').map((ep) => ep.trim());
  data.similars =
    data.similars.length > 0
      ? data.similars.split(',').map((sim) => sim.trim())
      : null;

  return data;
};

export const AddTitleDialog = ({ isOpen, handleClose }) => {
  const methods = useForm();

  const onFormSubmit = (data) => {
    api.createTitle(formatFormData(data));
    handleClose();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='form-dialog-title'
      fullWidth
    >
      <DialogTitle id='form-dialog-title'>
        <Typography variant='h5' style={{ fontWeight: 600 }}>
          Create new title
        </Typography>
      </DialogTitle>
      <FormProvider {...methods}>
        <DialogForm onFormSubmit={onFormSubmit} />
      </FormProvider>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          form='dialogForm'
          type='submit'
          variant='contained'
          color='primary'
        >
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};
