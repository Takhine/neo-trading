import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';

import Home from '@material-ui/icons/Home';
import Cart from '@material-ui/icons/ShoppingCart';



const navItems = [
    {
        id: 1,
        outlink: '/',
        name: 'Home',
        icon: <Home/>
    },
    {
        id: 2,
        outlink: '/products',
        name: 'Products',
        icon: <Cart/>,
    }
]


const Sidebar = (props) => {

    return (
        <div
            className="sidebar-list"
            role="presentation"
            onClick={props.toggleDrawer}
        >
            <List>
                {navItems.map((navItem) => (
                    <NavLink key={navItem.id} exact to={navItem.outlink}>
                        <ListItem className="list-item" button>
                            <ListItemIcon>{navItem.icon}</ListItemIcon>
                            <ListItemText primary={navItem.name} />
                        </ListItem>
                    </NavLink>
                ))}
            </List>
        </div>
    );
}
export default Sidebar;




