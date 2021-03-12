import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, IconButton, Divider, List } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MovieIcon from '@material-ui/icons/Movie';
import StarsIcon from '@material-ui/icons/Stars';
import SettingsIcon from '@material-ui/icons/Settings';

import drawerStyles from './drawerStyle.scss';

const defaultProps = {
  isOpen: false,
  width: 240,
  onClose: () => {
    console.log('default drawerClose handler');
  },
};

const useStyles = makeStyles((theme) => ({
  drawerOpen: ({ drawerWidth }) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  }),
}));

export const NavigationDrawer = ({ isOpen, width, onClose }) => {
  const classes = useStyles({ drawerWidth: width });
  const theme = useTheme();

  return (
    <Drawer
      variant='permanent'
      className={clsx('drawer', {
        [classes.drawerOpen]: isOpen,
        ['drawerClose']: !isOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: isOpen,
          ['drawerClose']: !isOpen,
        }),
      }}
    >
      <div className='toolbar'>
        <IconButton onClick={onClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List className='drawerContent'>
        <ListItem button key={'watchlist'}>
          <ListItemIcon>
            <MovieIcon />
          </ListItemIcon>
          <ListItemText primary={'Watchlist'} />
        </ListItem>
        <ListItem button key={'recommended'}>
          <ListItemIcon>
            <StarsIcon />
          </ListItemIcon>
          <ListItemText primary={'Recommended'} />
        </ListItem>
        <ListItem button key={'settings'}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary={'Settings'} />
        </ListItem>
      </List>
    </Drawer>
  );
};

NavigationDrawer.defaultProps = defaultProps;
