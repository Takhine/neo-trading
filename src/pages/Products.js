import React from 'react';

import Header from 'components/products/Header';
import Broiler from 'components/products/Broiler';
import Layer from 'components/products/Layer';


const Products=()=> {
    return (
        <div className="products">
            <Header />
            <Broiler />
        <hr/>
            <Layer />
        </div>
    )
}

export default Products;