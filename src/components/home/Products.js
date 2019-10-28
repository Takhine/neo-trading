import React from 'react';

import { Grid, Paper, Button } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import layer from 'static/images/red-bird.jpg';
import broiler from 'static/images/white-bird.jpg';
import Fade from 'react-reveal/Fade';


const Products = () => {
    return (
        <div className="products container">
            <div className="title-container">
                <h2 className="products-title">Poultry Concentrates</h2>
                <NavLink exact to="/products">
                    <Button>View All</Button>
                </NavLink>
            </div>
            <hr />
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={4}>
                <Grid className="products-grid-1" item xs={12} md={6}>
                    <Fade left>
                    <Paper className="products-card">
                        <div className="image-container">
                            <img src={broiler} alt="Broiler Bird" />
                        </div>
                        <h3>Broiler Concentrates</h3>
                    </Paper>
                    </Fade>
                </Grid>
                <Grid className="products-grid-2" item xs={12} md={6}>
                    <Fade right>
                    <Paper className="products-card">
                        <div className="image-container">
                            <img src={layer} alt="Layer Bird" />
                        </div>
                        <h3>Layer Concentrates</h3>
                    </Paper>
                    </Fade> 
                </Grid>
            </Grid>
        </div>
    )
}

export default Products;