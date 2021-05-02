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
      anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
      disablePortal
      className='watchlists-dropdown'
    >
      <Paper>
        <ClickAwayListener onClickAway={onClose}>
          <MenuList autoFocusItem variant='selectedMenu'>
            {watchlists.map((watchlist) => (
              <MenuItem
                onClick={() => onItemClick(watchlist)}
                className='watchlists-dropdown-item'
                key={watchlist?._id}
              >
                <span
                  className={
                    watchlist?._id == selectedWatchlistId
                      ? 'watchlists-dropdown-item-text selected'
                      : 'watchlists-dropdown-item-text'
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
