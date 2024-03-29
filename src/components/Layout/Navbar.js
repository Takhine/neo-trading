import React from 'react';

// MATERIAL
import {
    AppBar,
    Toolbar,
    IconButton,
    Button,
    Drawer
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { NavLink } from 'react-router-dom';

import logo from 'static/images/logo.svg';
import cancel from 'static/images/icons/sidebar-cancel-icon.png';

import Sidebar from './Sidebar';
import Contact from '../Contact';

const Navbar = () => {
    const [state, setState] = React.useState({
        left: false,
        right:false,
    });

    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };
    // Sidebar Menu
    const leftSideList = side => (
        <div>
            <Sidebar toggleDrawer={toggleDrawer('left',false)}/>
        </div>
    );
    // Contact Form
    const rightSideList = side => (
        <div>
            <Contact toggleDrawer={toggleDrawer('right',false)} />
        </div>
    );
    return (
        <div className="grow">
            <AppBar position="fixed" id="navbar">
                <Toolbar>
                    <IconButton
                        aria-label="Open drawer"
                        edge="start"
                        onClick={toggleDrawer('left', true)}
                        className="menu-button"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer className="sidebar-container" role="temporary" open={state.left} onClose={toggleDrawer('left', false)}>
                        <div className="flex-end">
                            <IconButton
                                onClick={toggleDrawer('left', false)}
                            >
                                <img src={cancel} alt="cancel" width="18" />
                            </IconButton>
                        </div>
                        {leftSideList('left')}
                    </Drawer>
                    <div className="logo-container">
                        <NavLink exact to="/">
                        <img src={logo} alt="Neo Traders" />
                        </NavLink>
                    </div>
                    <div className="grow" />

                    <div className="nav-menu-container">
                        <NavLink exact to="/">
                            <Button className="nav-button">Home</Button>
                        </NavLink>
                        <NavLink exact to="/products">
                            <Button className="nav-button">Products</Button>
                        </NavLink>
                            <Button className="nav-button contact-button" onClick={toggleDrawer('right', true)}>Contact</Button>
                    </div>
                    <div className="nav-contact-container">
                    <Button className="nav-button contact-button" onClick={toggleDrawer('right', true)}>Contact</Button>
                    </div>
                    <Drawer className="contact-container" role="temporary" anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                        <div className="flex-start">
                            <IconButton
                                onClick={toggleDrawer('right', false)}
                            >
                                <img src={cancel} alt="cancel" width="18" />
                            </IconButton>
                        </div>
                        {rightSideList('right')}
                    </Drawer>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;