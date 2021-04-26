import { Popover } from '@material-ui/core';
import { SearchDropdownItem } from 'components/Search/SearchDropdown/SearchDropdownItem/SearchDropdownItem';

export const SearchDropdown = ({ open, anchorEl, data, onClose }) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl.current}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      onClose={onClose}
      disableAutoFocus={true}
      disableEnforceFocus={true}
      className='dropdown'
    >
      {data?.map((item) => (
        <SearchDropdownItem item={item} />
      ))}
    </Popover>
  );
};
