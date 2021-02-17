import React, {useState} from 'react'

import { NavigationAppBar } from './AppBar/AppBar'
import { NavigationDrawer } from './Drawer/Drawer'

const defaultProps = {
    title: 'App',
    navDrawerWidth: 240,
};

export const Navigation = ({title, navDrawerWidth}) => {
    const [isDrawerOpen, setIsDrawerOpen ] = useState(false);

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    }
    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
    }



    return (
        <>
            <NavigationAppBar 
                title={title}
                isDrawerOpen={isDrawerOpen}
                onDrawerOpen={handleDrawerOpen}
                drawerWidth = {navDrawerWidth}
            />
            <NavigationDrawer 
                isOpen={isDrawerOpen}
                width={navDrawerWidth}
                onClose = {handleDrawerClose}
            />
        </>
    );
};

Navigation.defaultProps = defaultProps;