import { forwardRef } from 'react';

import { Button } from '@material-ui/core';

import AddIcon from '@material-ui/icons/Add';

export const AddTitleToWatchlistButton = forwardRef(({ onClick }, ref) => {
  return (
    <Button
      variant='outlined'
      className='add-button'
      color='primary'
      size='large'
      endIcon={<AddIcon />}
      ref={ref}
      onClick={onClick}
    >
      Add to watchlist
    </Button>
  );
});
