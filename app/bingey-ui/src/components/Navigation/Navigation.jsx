import { useState } from 'react';

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

  return (
    <>
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
      />
    </>
  );
};

Navigation.defaultProps = defaultProps;
