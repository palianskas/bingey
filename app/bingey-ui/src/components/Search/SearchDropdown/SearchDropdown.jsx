import { useEffect, useState } from 'react';
import { Popover } from '@material-ui/core';
import { SearchDropdownItem } from 'components/Search/SearchDropdown/SearchDropdownItem/SearchDropdownItem';

export const SearchDropdown = ({ anchorEl, data }) => {
  const [isOpen, setIsOpen] = useState(data && data.length > 0);

  useEffect(() => {
    console.log(data);
    setIsOpen(data && data.length > 0);
  }, [data]);

  return (
    <Popover
      open={isOpen}
      anchorEl={anchorEl}
      onClose={() => setIsOpen(false)}
      className='dropdown'
    >
      {data?.map((item) => (
        <SearchDropdownItem item={item} />
      ))}
    </Popover>
  );
};
