import React from 'react';

import {
    Grid,
    Button,
    Drawer,
    IconButton
} from '@material-ui/core';

import banner from 'static/images/header-desktop.svg';
import bannerMobile from 'static/images/header-desktop.svg';
import Contact from 'components/Contact';
import cancel from 'static/images/icons/sidebar-cancel-icon.png';
import {NavLink} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
const Header = () => {
    const [state, setState] = React.useState({
        right:false,
    });
    const toggleDrawer = (side, open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [side]: open });
    };
    // Contact Form
    const rightSideList = side => (
        <div>
            <Contact toggleDrawer={toggleDrawer('right',false)} />
        </div>
    );
    return (
        <div className="header container">
            <Grid container className="header-container">
                <Grid item xs={12} sm={6}>
                    <div className="title-container">
                        <h1 className="main-title">Neo Trading</h1>
                        <Fade top>
                        <h2 className="slogan">Your Trusted Business Partner</h2>

                        </Fade>
                    </div>
                    <div className="header-buttons-container">
                        <NavLink exact to="/products">
                            <Button className="products-button">Products</Button>
                        </NavLink>
                            <Button className="contact-button" onClick={toggleDrawer('right', true)}>Get in touch</Button>
                    </div>
                </Grid>

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

                <Grid item xs={12} sm={6}>
                    <div className="banner-container">
                        <Fade>
                        <img src={banner} className="desktop" alt="Neo Trading Banner" />
                        <img src={bannerMobile} className="mobile" alt="Neo Trading Banner" />
                        </Fade>
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

export default Header;