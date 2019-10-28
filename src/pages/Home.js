import React from 'react';

import Header from '../components/home/Header';
import About from '../components/home/About';
import Benefits from '../components/home/Benefits';
import Products from '../components/home/Products';




const Home = () => {
    return (
        <div className="home">
            <Header />
            <About />
            <Benefits />
            <Products />

        </div>
    )
}

export default Home;