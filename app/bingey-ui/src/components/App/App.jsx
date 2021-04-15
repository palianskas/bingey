import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Navigation } from 'components/Navigation/Navigation';
import { Watchlist } from 'components/Watchlist/Watchlist';
import AdminDashboard from 'admin/components/Dashboard/Dashboard';

import './appStyle.scss';

export const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/admin'>
            <AdminDashboard />
          </Route>
          <Route>
            <Navigation title='Bingey' drawerWidth={240} />
            <Switch>
              <Route path='/watchlists/:id'>
                <main className='content'>
                  <Watchlist />
                </main>
              </Route>
            </Switch>
          </Route>
        </Switch>
      </Router>
    </>
  );
};
