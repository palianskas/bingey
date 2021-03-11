import React, { useState } from 'react';

import { NavigationAppBar } from 'components/Navigation/Appbar/Appbar';
import { NavigationDrawer } from 'components/Navigation/Drawer/Drawer';

const defaultProps = {
  title: 'Bingey',
  navDrawerWidth: 240,
};

export const Navigation = ({ title, navDrawerWidth }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <NavigationAppBar
        title={title}
        isDrawerOpen={isDrawerOpen}
        onDrawerOpen={handleDrawerOpen}
        drawerWidth={navDrawerWidth}
      />
      <NavigationDrawer
        isOpen={isDrawerOpen}
        width={navDrawerWidth}
        onClose={handleDrawerClose}
      />
    </>
  );
};

Navigation.defaultProps = defaultProps;
