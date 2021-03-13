import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from 'admin/components/Navigation/AppBar';
import UsersList from 'admin/components/Users/UsersList';
import TitleAdd from 'admin/components/Titles/TitleAdd';
import UserInfo from 'admin/components/Users/UserInfo';

const Dashboard = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/admin'>
            <UsersList />
          </Route>
          <Route path='/admin/add-title'>
            <TitleAdd />
          </Route>
          <Route path='/admin/:id'>
            <UserInfo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Dashboard;
