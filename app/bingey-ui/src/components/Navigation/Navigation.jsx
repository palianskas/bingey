import { useState, useRef } from 'react';

import { useClickAway } from 'use-click-away';

import { NavigationAppBar } from 'components/Navigation/Appbar/Appbar';
import { NavigationDrawer } from 'components/Navigation/Drawer/Drawer';

const defaultProps = {
  title: 'Bingey',
  drawerWidth: 240,
};

export const Navigation = ({ title, drawerWidth }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  const clickRef = useRef(null);

  useClickAway(clickRef, handleDrawerClose);

  return (
    <div ref={clickRef}>
      <NavigationAppBar
        title={title}
        isDrawerOpen={isDrawerOpen}
        onDrawerOpen={handleDrawerOpen}
        drawerWidth={drawerWidth}
      />
      <NavigationDrawer
        isOpen={isDrawerOpen}
        width={drawerWidth}
        onClose={handleDrawerClose}
        onOpen={handleDrawerOpen}
      />
    </div>
  );
};

Navigation.defaultProps = defaultProps;
