import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { NavigationAppBar } from 'components/Navigation/Appbar/Appbar';
import { Watchlist } from 'components/Watchlist/Watchlist';
import AdminDashboard from 'admin/components/Dashboard/Dashboard';

export const App = () => {
  const data = [
    {
      name: '1 title name',
    },
    {
      name: '2 title name',
    },
    {
      name: '3 title name',
    },
    {
      name: '4 title name',
    },
    {
      name: '5 title name',
    },
    {
      name: '6 title name',
    },
    {
      name: '7 title name',
    },
  ];

  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <NavigationAppBar title='Bingey' />
            <Watchlist titles={data} />
          </Route>
          <Route path='/admin'>
            <AdminDashboard />
          </Route>
        </Switch>
      </Router>
    </>
  );
};
