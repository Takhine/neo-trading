import React from 'react';

import { Grid } from '@material-ui/core';

import listIcon from 'static/images/icons/right-arrow.svg'
import leaves from 'static/images/small-leaves.svg'
import Fade from 'react-reveal/Fade';


const benefitsList = [
    {
        id: 1,
        benefit: "Availability of Poultry Feed having International Quality Standards",
    },
    {
        id: 2,
        benefit: 'Chances of error in mixing the medicines and trace mininerals are minimized',
    },
    {
        id: 3,
        benefit: 'Chances of error in selecting the individual ingredients are avoided',
    },
    {
        id: 4,
        benefit: 'Hassels ofpurchasing and storage of raw materials are minimized to a few',
    },
    {
        id: 5,
        benefit: 'Helps in better digestibility',
    },
    {
        id: 6,
        benefit: 'Provides uniform growth and excellent livability',
    },
    {
        id: 7,
        benefit: 'Free from bacteria, pathogens and toxins',
    },
    {
        id: 8,
        benefit: 'Higher egg production with bigger egg size and low breakage',
    },
    {
        id: 9,
        benefit: 'Better quality of yolk',
    },
    {
        id: 10,
        benefit: 'Higher weight gains with improvement in FCR',
    },
    {
        id: 11,
        benefit: 'Leading to higher profits for poultry farmers',
    },
]

const Benefits = () => {
    return (
        <div className="benefits container">
            <h2 className="benefits-title">Benefits</h2>
            <Grid className="benefits-container" container spacing={2}>
                <img className="leaves" src={leaves} alt="Leaves"/>
                {benefitsList.map((benefit) => {
                    return (
                        <Grid key={benefit.id} item className="benefit-grid" xs={12} md={6}>
                           <Fade top>
                           <div className="benefit-div">
                                <img src={listIcon} alt="List Arrow" />
                                <p>{benefit.benefit}</p>
                            </div>
                           </Fade>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    )
}

export default Benefits;