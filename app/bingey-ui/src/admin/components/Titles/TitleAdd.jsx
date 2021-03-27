import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import { AddTitleDialog } from 'admin/components/AddTitleDialog/AddTitleDialog';

const TitleAdd = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <p>This is where you can add titles</p>
      <Button variant='contained' onClick={handleOpen}>
        Add new title
      </Button>
      <AddTitleDialog isOpen={open} handleClose={handleClose} />
    </div>
  );
};

export default TitleAdd;
