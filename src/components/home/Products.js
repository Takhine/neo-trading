import React from 'react';

import { Grid, Paper } from '@material-ui/core';

import layer from 'static/images/red-bird.jpg';
import broiler from 'static/images/white-bird.jpg';


const Products = () => {
    return (
        <div className="products container">
            <h2 className="products-title">Poultry Concentrates</h2>
            <hr/>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={4}>
                <Grid  className="products-grid-1" item xs={12} md={6}>
                    <Paper className="products-card">
                        <div className="image-container">
                        <img src={broiler} alt="Broiler Bird" />
                        </div>
                        <h3>Broiler Concentrates</h3>
                    </Paper>
                </Grid>
                <Grid className="products-grid-2" item xs={12} md={6}>
                    <Paper className="products-card">
                        <div className="image-container">
                            <img src={layer} alt="Layer Bird" />
                        </div>
                        <h3>Layer Concentrates</h3>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Products;