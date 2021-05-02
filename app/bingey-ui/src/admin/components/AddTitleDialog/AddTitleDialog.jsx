import { useForm, FormProvider } from 'react-hook-form';
import { Button, DialogActions, DialogContent } from '@material-ui/core';

import api from 'utils/api';
import { DialogForm } from 'admin/components/AddTitleDialog/DialogForm/DialogForm';
import { BasicDialog } from 'components/Dialogs/BasicDialog';

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
    <BasicDialog
      dialogTitle={'Create new title'}
      isDialogOpen={isOpen}
      onDialogClose={handleClose}
    >
      <DialogContent>
        <FormProvider {...methods}>
          <DialogForm onFormSubmit={onFormSubmit} />
        </FormProvider>
      </DialogContent>
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
    </BasicDialog>
  );
};
