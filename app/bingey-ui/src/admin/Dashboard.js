import React from 'react';
import Header from './components/Navigation/AppBar';
import UsersList from './components/UsersList';
import TitleAdd from './components/TitleAdd';
import UserInfo from './components/UserInfo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/admin">
            <UsersList />
          </Route>
          <Route path="/admin/add-title">
            <TitleAdd />
          </Route>
          <Route path="/admin/:id">
            <UserInfo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default Dashboard;
