import React from 'react';
import { DialogTitle, Slide } from '@material-ui/core';
import DialogUI from '@material-ui/core/Dialog';

import './basicDialogStyle.scss';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export const BasicDialog = ({
  dialogTitle,
  isDialogOpen,
  onDialogClose,
  children,
}) => {
  const closeDialog = () => {
    onDialogClose();
  };

  return (
    <DialogUI
      open={isDialogOpen}
      onClose={closeDialog}
      TransitionComponent={Transition}
      aria-labelledby='alert-dialog-slide-title'
      aria-describedby='alert-dialog-slide-description'
    >
      <div className='header-container'>
        <DialogTitle className='title' disableTypography title={dialogTitle}>
          {dialogTitle}
        </DialogTitle>
      </div>
      {children}
    </DialogUI>
  );
};
