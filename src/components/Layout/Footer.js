import React from 'react';

import { 
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@material-ui/core';

import Mail from '@material-ui/icons/MailOutline';
import Phone from '@material-ui/icons/Phone';
import House from '@material-ui/icons/House';

import {NavLink} from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footer container">
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <h2>Neo Trading</h2>
                    <List>
                        <ListItem className="list-item">
                            <ListItemIcon><Phone /></ListItemIcon>
                            <ListItemText>
                                <p>
                                    +91 9637052211
                                <br />
                                    (0253) 2230488
                                </p>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><House /></ListItemIcon>
                            <ListItemText>
                                <p>
                                    TH9/201, Ashok Astoria Complex, <br />Gate #2, Govardhan Village,<br/> Near YCMOU, Girnare Road,
                                <br /> Nashik - 422222 <br /> Maharashtra, India
                                </p>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon><Mail /></ListItemIcon>
                            <ListItemText>
                                <p>
                                    info@neotrading.in
                            </p>
                            </ListItemText>
                        </ListItem>
                    </List>

                </Grid>
                <Grid item xs={12} md={6}>
                    <h2>Quick Links</h2>
                    <List>
                        <NavLink exact to="/">
                            <ListItem className="list-item" button>
                                <ListItemText>
                                    Home
                            </ListItemText>
                            </ListItem>
                        </NavLink>
                        <NavLink exact to="/products">
                            <ListItem className="list-item" button>
                                <ListItemText>
                                    Products
                            </ListItemText>
                            </ListItem>
                        </NavLink>
                    </List>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;