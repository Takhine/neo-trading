import React from 'react';

import Header from '../components/home/Header';
import About from '../components/home/About';
import Benefits from '../components/home/Benefits';



const Home = () => {
    return (
        <div className="home">
            <Header />
            <About />
            <Benefits />

        </div>
    )
}

export default Home;