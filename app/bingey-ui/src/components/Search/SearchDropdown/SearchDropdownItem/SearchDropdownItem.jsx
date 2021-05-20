import { Divider, ListItem, ListItemText, Typography } from '@material-ui/core';

import './searchDropdownItemStyle.scss';

export const SearchDropdownItem = ({ item, onClick }) => {
  return (
    <div onClick={onClick}>
      <ListItem className='search-dropdown-item' alignItems='flex-start' button>
        <ListItemText
          className='search-dropdown-text'
          primary={
            <Typography
              variant='h5'
              className='search-dropdown-primary'
              title={item?.name}
            >
              {item?.name}
            </Typography>
          }
          secondary={
            <Typography variant='h5' className='search-dropdown-secondary'>
              {item?.releaseDate?.split('-')[0]}
            </Typography>
          }
        />
        <img
          src={item?.imageUrl}
          className='search-dropdown-image'
          alt={`${item?.name} poster`}
        ></img>
      </ListItem>
      <Divider />
    </div>
  );
};
