import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// Global styles
import 'static/scss/main.scss';


function Layout(props) {
    return (
        <React.Fragment>
            <Navbar/>
            {props.children}
            <Footer/>
        </React.Fragment>
    )
}

export default Layout;