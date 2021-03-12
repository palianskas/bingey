import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Tab, Tabs } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import './AppBar.scss';

const Header = withRouter(({ history }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <AppBar className={'app-bar'} position="static">
        <Toolbar>
          <Typography className="title" variant="h6">
            Admin
          </Typography>
          <Tabs value={value} onChange={handleChange}>
            <Tab
              label="Users"
              onClick={() => {
                history.push('/admin');
              }}
            />
            <Tab
              label="Add Title"
              onClick={() => {
                history.push('/admin/add-title');
              }}
            />
          </Tabs>
          <Button
            className="app-link"
            color="inherit"
            onClick={() => {
              window.open('/');
            }}
          >
            Bingey
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
});

export default Header;
