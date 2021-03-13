import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Tab, Tabs } from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import './AppBar.scss';

const Header = withRouter(({ history, location }) => {
  const [value, setValue] = useState(location.pathname);

  return (
    <div>
      <AppBar className={'app-bar'} position='static'>
        <Toolbar>
          <Typography className='title' variant='h6'>
            Admin
          </Typography>
          <Tabs value={value}>
            <Tab
              label='Users'
              value='/admin'
              onClick={() => {
                history.push('/admin');
                setValue(history.location.pathname);
              }}
            />
            <Tab
              label='Add Title'
              value='/admin/add-title'
              onClick={() => {
                history.push('/admin/add-title');
                setValue(history.location.pathname);
              }}
            />
          </Tabs>
          <Button
            className='app-link'
            color='inherit'
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
