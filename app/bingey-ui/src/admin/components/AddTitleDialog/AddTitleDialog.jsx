import { useForm, FormProvider } from 'react-hook-form';

import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  Typography,
} from '@material-ui/core';

import { DialogForm } from './DialogForm/DialogForm';

export const AddTitleDialog = ({ isOpen, onClose }) => {
  const methods = useForm();

  const handleClose = () => {
    onClose();
  };

  const onFormSubmit = (data) => {
    console.log('handle valid submit  in parent');
    methods.reset(data);
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
        <Button>Cancel</Button>
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
