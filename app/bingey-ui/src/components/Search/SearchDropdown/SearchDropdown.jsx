import { useState } from 'react';
import { Collapse, Paper } from '@material-ui/core';

import { SearchDropdownItem } from 'components/Search/SearchDropdown/SearchDropdownItem/SearchDropdownItem';
import { TitleDialog } from 'components/Watchlist/TitleDialog/TitleDialog';

import './searchDropdownStyle.scss';

export const SearchDropdown = ({ open, titles, onClose }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  const handleItemClick = (selectedItem) => {
    // TODO need to get full selectedItem title from api here
    setSelectedItem(selectedItem);
    setIsOpenDialog(true);
    onClose();
  };

  const handleCloseDialog = () => {
    setIsOpenDialog(false);
  };

  return (
    <>
      <Paper className={'dropdown'}>
        <Collapse in={open} timeout={250}>
          {titles?.map((item) => (
            <SearchDropdownItem
              item={item}
              key={item?._id}
              onClick={() => handleItemClick(item)}
            />
          ))}
        </Collapse>
      </Paper>
      <TitleDialog
        title={selectedItem}
        open={isOpenDialog}
        onClose={handleCloseDialog}
      />
    </>
  );
};
