import React from 'react';

import { Grid, Paper } from '@material-ui/core';

import poultry from 'static/images/desktop-poultry.svg'


const About = () => {
    return (
        <div className="about container">
            <h2 className="about-title">Poultry Concentrates</h2>
            <Grid container spacing={4}>
                <Grid item xs={12} md={8}>
                    <Paper className="about-content">
                        <p>
                            An important part of raising chicken is feeding. Feeding makes up the major cost of production and good nutrition is reflected in the bird's performance.
                        </p>
                        <p>
                            To achieve the best performance for your poultry, we bring to you Neofeed's Range of Concentrates, NEOMAX.
                        </p>
                        <p>NEOMAX is a unique blend of protein sources, energy sources, amino acids, vitamins, trace minerals, calcium and phospohorous sources, enzymes, prebiotics, acidifiers, growth promoters, salt, coccidostats, antioxidants and range of Indian herbs.</p>
                        <p>Poultry farmers can prepare their own feed by purchasing just a few raw materials and mixing them with Neomax to make healthy nutritious diet for their poultries.</p>
                        <p>We drive results by deep understanding and also provide custom based formulations for better results according to the local materials available.</p>
                    </Paper>
                </Grid>
                <Grid item className="about-grid" xs={12} md={4}>
                    <img src={poultry} alt="Neo Trading Poultry" />
                </Grid>
            </Grid>
        </div>
    )
}

export default About;