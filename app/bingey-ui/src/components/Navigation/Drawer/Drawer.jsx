import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Drawer,
  IconButton,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import StarsIcon from '@material-ui/icons/Stars';
import SettingsIcon from '@material-ui/icons/Settings';
import './drawerStyle.scss';
import { WatchlistsControler } from 'components/WatchlistsControler/WatchlistsControler';

const defaultProps = {
  isOpen: false,
  width: 240,
  onClose: () => {},
  onOpen: () => {},
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

export const NavigationDrawer = ({ isOpen, width, onClose, onOpen }) => {
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
        <WatchlistsControler openDrawer={onOpen} isDrawerOpen={isOpen} />
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
