import React from 'react';
import banner from 'static/images/chick-fed.jpg';
import Fade from 'react-reveal/Fade';

const Header = () => {
    return (
        <div className="header">
            <img src={banner} alt="Neo Trading Chicken Poultry" />
            <div className="header-menu">
                <Fade>
                <h1 className="header-title">Concentrates</h1>
                </Fade>
                {/* <h2 className="hash-link">Broiler</h2>
                <h2 className="hash-link">Layer</h2> */}
            </div>
        </div>
    )
}

export default Header;