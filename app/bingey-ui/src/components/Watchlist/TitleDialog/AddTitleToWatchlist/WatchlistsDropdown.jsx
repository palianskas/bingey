import {
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Popover,
} from '@material-ui/core';

export const WatchlistsDropdown = ({
  watchlists,
  selectedWatchlistId,
  open,
  anchorEl,
  onClose,
  onItemClick,
}) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      transformOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      disablePortal
      className='dropdown'
    >
      <Paper>
        <ClickAwayListener onClickAway={onClose}>
          <MenuList autoFocusItem variant='selectedMenu'>
            {watchlists.map((watchlist) => (
              <MenuItem
                onClick={() => onItemClick(watchlist)}
                className='item'
                key={watchlist?._id}
              >
                <span
                  className={
                    watchlist?._id == selectedWatchlistId
                      ? 'item-text selected'
                      : 'item-text'
                  }
                >
                  {watchlist?.name}
                </span>
              </MenuItem>
            ))}
          </MenuList>
        </ClickAwayListener>
      </Paper>
    </Popover>
  );
};
