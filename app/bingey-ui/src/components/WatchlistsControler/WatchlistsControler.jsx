import React, { useEffect, useState } from 'react';
import { WatchlistAdd } from 'components/WatchlistsControler/WatchlistAdd/WatchlistAdd';
import { WatchlistPicker } from 'components/WatchlistsControler/WatchlistPicker/WatchlistPicker';
import { List } from '@material-ui/core';
import api from 'utils/api';

export const WatchlistsControler = ({ openDrawer, isDrawerOpen }) => {
  const [watchlists, setWatchlists] = useState([]);

  useEffect(() => {
    const loadWatchlists = async () => {
      const watchlists = await api.getWatchlists();
      if (
        Object.keys(watchlists).length !== 0 &&
        watchlists.constructor !== Object
      )
        setWatchlists(watchlists);
    };
    loadWatchlists();
  }, []);

  const handleCreateWatchlist = async (name) => {
    const newWatchlist = await api.createWatchlist({ name: name });
    setWatchlists([...watchlists, newWatchlist]);
  };

  return (
    <>
      <WatchlistAdd
        openDrawer={openDrawer}
        onCreateWatchlist={handleCreateWatchlist}
      />
      <WatchlistPicker
        openDrawer={openDrawer}
        isDrawerOpen={isDrawerOpen}
        watchlists={watchlists}
      />
    </>
  );
};
