import React from 'react';

import {
    Grid,
    Button
} from '@material-ui/core';

import banner from 'static/images/header-desktop.svg';
import bannerMobile from 'static/images/header-desktop.svg';

const Header = () => {
    return (
        <div className="header container">
            <Grid container className="header-container">
                <Grid item xs={12} sm={6}>
                    <div className="title-container">
                        <h1 className="main-title">Neo Trading</h1>
                        <h2 className="slogan">Your Trusted Business Partner</h2>
                    </div>
                    <div className="header-buttons-container">
                            <Button className="products-button">Products</Button>
                            <Button className="contact-button">Get in touch</Button>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <div className="banner-container">
                        <img src={banner} className="desktop" alt="Neo Trading Banner" />
                        <img src={bannerMobile} className="mobile" alt="Neo Trading Banner" />
                    </div>
                </Grid>

            </Grid>
        </div>
    )
}

export default Header;