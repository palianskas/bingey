import React, { useEffect, useState } from 'react';
import { WatchlistAdd } from 'components/WatchlistsControler/WatchlistAdd/WatchlistAdd';
import { WatchlistPicker } from 'components/WatchlistsControler/WatchlistPicker/WatchlistPicker';
import { withRouter } from 'react-router-dom';
import api from 'utils/api';

export const WatchlistsController = withRouter(
  ({ history, openDrawer, isDrawerOpen }) => {
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
      if (newWatchlist) {
        setWatchlists([...watchlists, newWatchlist]);
        history.push(`/watchlists/${newWatchlist._id}`);
      }
    };

    return (
      <>
        <WatchlistAdd
          openDrawer={openDrawer}
          onCreateWatchlist={handleCreateWatchlist}
        />
        <WatchlistPicker
          history={history}
          openDrawer={openDrawer}
          isDrawerOpen={isDrawerOpen}
          watchlists={watchlists}
        />
      </>
    );
  }
);
