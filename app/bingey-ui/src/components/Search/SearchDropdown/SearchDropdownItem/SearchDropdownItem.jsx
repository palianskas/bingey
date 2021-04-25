import { ListItem, ListItemText } from '@material-ui/core';

import './searchDropdownItemStyle.scss';

export const SearchDropdownItem = ({ item }) => {
  return (
    <ListItem className='item' alignItems='flex-start'>
      <ListItemText primary={item.name} secondary={item.releaseDate} />
      <img
        src={item.imageUrl}
        className='image'
        alt={`${item.name} poster`}
      ></img>
    </ListItem>
  );
};
