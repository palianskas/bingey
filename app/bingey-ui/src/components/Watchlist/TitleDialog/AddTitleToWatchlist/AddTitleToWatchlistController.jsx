import { useState, useRef, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import { Snackbar } from '@material-ui/core';

import { AddTitleToWatchlistButton } from 'components/Watchlist/TitleDialog/AddTitleToWatchlist/AddTitleToWatchlistButton';
import { WatchlistsDropdown } from 'components/Watchlist/TitleDialog/AddTitleToWatchlist/WatchlistsDropdown';

import api from 'utils/api';

import './addTitleToWatchlistStyle.scss';

const formatTitle = (title) => {
  return {
    _id: title._id,
    name: title.name,
    releaseDate: new Date(title.releaseDate).toLocaleDateString('lt-LT'),
    imageUrl: title.imageUrl,
    upcomingEpisode: title.upcomingEpisode,
    genres: title.genres,
  };
};

export const AddTitleToWatchlistController = ({ title }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenAlert, setIsOpenAlert] = useState(false);
  const [watchlists, setWatchlists] = useState([]);

  const buttonRef = useRef('test');

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const loadWatchlist = async () => {
      setWatchlists(await api.getWatchlists());
    };

    loadWatchlist();
  }, []);

  const handleOpenDialog = () => {
    setIsOpenMenu(true);
  };

  const handleCloseDialog = () => {
    setIsOpenMenu(false);
  };

  const handleOpenAlert = () => {
    setIsOpenAlert(true);
  };

  const handleCloseAlert = () => {
    setIsOpenAlert(false);
  };

  const handleAddToWatchlist = async (watchlist) => {
    const result = await api.addTitleToWatchlist(
      watchlist._id,
      formatTitle(title)
    );

    if (result.name == watchlist.name) {
      handleOpenAlert();
    }

    handleCloseDialog();

    history.go(0);
  };

  return (
    <>
      <AddTitleToWatchlistButton ref={buttonRef} onClick={handleOpenDialog} />
      <WatchlistsDropdown
        watchlists={watchlists}
        selectedWatchlistId={id}
        open={isOpenMenu}
        onClose={handleCloseDialog}
        onItemClick={handleAddToWatchlist}
        anchorEl={buttonRef.current}
      />
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={isOpenAlert}
        autoHideDuration={2000}
        onClose={handleCloseAlert}
        message='Added title to watchlist!'
      />
    </>
  );
};
