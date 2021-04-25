import React from 'react';
import clsx from 'clsx';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

import Logo from 'resources/logo/BingeyLogo_White.svg';

import { Search } from 'components/Search/Search';

import './appbarStyle.scss';

const useStyles = makeStyles((theme) => ({
  appBarShift: ({ drawerWidth }) => ({
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    [theme.breakpoints.down('sm')]: {
      width: 0,
    },
  }),
}));

export const NavigationAppBar = ({
  title,
  isDrawerOpen,
  onDrawerOpen,
  drawerWidth,
}) => {
  const classes = useStyles({ drawerWidth });

  return (
    <div className='root'>
      <AppBar
        position='fixed'
        className={clsx('appBar', {
          [classes.appBarShift]: isDrawerOpen,
        })}
      >
        <Toolbar>
          <IconButton
            edge='start'
            className={clsx('menuButton', {
              ['hide']: isDrawerOpen,
            })}
            color='inherit'
            aria-label='open drawer'
            onClick={onDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <img src={Logo} className='logo' alt={title} />
          <Search />
        </Toolbar>
      </AppBar>
    </div>
  );
};
