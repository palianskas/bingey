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

const defaultProps = {
  isOpen: false,
  width: 240,
  onClose: () => {
    console.log('default drawerClose handler');
  },
};

const useStyles = makeStyles((theme) => ({
  hide: {
    display: 'none',
  },
  drawer: {
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
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
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    // width: theme.spacing(5) + 1,
    width: theme.spacing(9) + 1,
    // [theme.breakpoints.up('sm')]: {
    //   width: theme.spacing(9) + 1,
    // },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    padding: theme.spacing(0, 1),
  },
}));

export const NavigationDrawer = ({ isOpen, width, onClose }) => {
  console.log(width);

  const classes = useStyles({ drawerWidth: width });
  const theme = useTheme();

  return (
    <>
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: isOpen,
            [classes.drawerClose]: !isOpen,
          }),
        }}
      >
        {/* <div className={clsx({[classes.hide]: !isOpen,})}> */}
        <div className={classes.content}>
          <div className={classes.toolbar}>
            <IconButton onClick={onClose}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List>
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
        </div>
      </Drawer>
    </>
  );
};

NavigationDrawer.defaultProps = defaultProps;
