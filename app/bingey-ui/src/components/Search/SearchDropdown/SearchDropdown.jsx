import { useState } from 'react';
import {
  CircularProgress,
  Collapse,
  Paper,
  Typography,
} from '@material-ui/core';

import { SearchDropdownItem } from 'components/Search/SearchDropdown/SearchDropdownItem/SearchDropdownItem';
import { TitleDialog } from 'components/Watchlist/TitleDialog/TitleDialog';

import './searchDropdownStyle.scss';

export const SearchDropdown = ({
  open,
  titles,
  isQueryInProgress,
  onClose,
}) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const handleItemClick = (selectedItem) => {
    setSelectedItem(selectedItem);
    setIsOpenDialog(true);
    onClose();
  };

  const handleCloseDialog = () => {
    setIsOpenDialog(false);
    onClose();
  };

  return (
    <>
      {!!titles && (
        <Paper className={'dropdown'}>
          <Collapse in={open} timeout={250}>
            {isQueryInProgress ? (
              <div className='dropdown-alt-item'>
                <CircularProgress />
              </div>
            ) : titles?.length > 0 ? (
              titles?.map((item) => (
                <SearchDropdownItem
                  item={item}
                  key={item?._id}
                  onClick={() => handleItemClick(item)}
                />
              ))
            ) : (
              <div className='dropdown-alt-item'>
                <Typography variant='h5'>No titles found</Typography>
              </div>
            )}
          </Collapse>
        </Paper>
      )}
      <TitleDialog
        title={selectedItem}
        open={isOpenDialog}
        onClose={handleCloseDialog}
      />
    </>
  );
};
