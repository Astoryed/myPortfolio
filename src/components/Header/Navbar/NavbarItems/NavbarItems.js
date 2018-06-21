import React from 'react';
import classes from './NavbarItems.css';
import { NavLink } from 'react-router-dom';

const NavbarItems = (props) => {
    return(
        <li className={classes.NavbarItems}>
            <NavLink exact={props.exact} to={props.link} activeClassName={classes.active}>{props.children}</NavLink>
        </li>

    )
};

export default NavbarItems;