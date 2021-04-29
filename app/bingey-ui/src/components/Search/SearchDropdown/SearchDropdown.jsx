import { Collapse, Paper } from '@material-ui/core';

import { SearchDropdownItem } from 'components/Search/SearchDropdown/SearchDropdownItem/SearchDropdownItem';

import './searchDropdownStyle.scss';

export const SearchDropdown = ({ open, titles }) => {
  return (
    <Paper className={'dropdown'}>
      <Collapse in={open} timeout={250}>
        {titles?.map((item) => (
          <SearchDropdownItem item={item} key={item?._id} />
        ))}
      </Collapse>
    </Paper>
  );
};
