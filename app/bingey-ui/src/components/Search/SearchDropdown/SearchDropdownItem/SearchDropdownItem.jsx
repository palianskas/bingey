import { Divider, ListItem, ListItemText, Typography } from '@material-ui/core';

import './searchDropdownItemStyle.scss';

export const SearchDropdownItem = ({ item, onClick }) => {
  return (
    <div onClick={onClick}>
      <ListItem className='item' alignItems='flex-start' button>
        <ListItemText
          className='text'
          primary={
            <Typography variant='h5' className='primary' title={item?.name}>
              {item?.name}
            </Typography>
          }
          secondary={
            <Typography variant='h5' className='secondary'>
              {item?.releaseDate}
            </Typography>
          }
        />
        <img
          src={item?.imageUrl}
          className='image'
          alt={`${item?.name} poster`}
        ></img>
      </ListItem>
      <Divider />
    </div>
  );
};
