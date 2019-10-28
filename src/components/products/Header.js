import React from 'react';
import banner from 'static/images/chick-fed.jpg';

const Header=()=> {
    return (
        <div className="header">
            <img src={banner} alt="Neo Trading Chicken Poultry" />
            <h1 className="header-title">Concentrates</h1>
        </div>
    )
}

export default Header;