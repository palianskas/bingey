import { Popover } from '@material-ui/core';
import { SearchDropdownItem } from 'components/Search/SearchDropdown/SearchDropdownItem/SearchDropdownItem';

export const SearchDropdown = ({ open, anchorRef, data, onClose }) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorRef.current}
      anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }}
      transformOrigin={{ horizontal: 'center', vertical: 'top' }}
      onClose={onClose}
      disableAutoFocus
      disableEnforceFocus
      className='dropdown'
    >
      {data?.map((item, index) => (
        <SearchDropdownItem item={item} isLast={index == data.length - 1} />
      ))}
    </Popover>
  );
};
