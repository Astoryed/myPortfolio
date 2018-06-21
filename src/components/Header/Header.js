import React from 'react';
import Navbar from './Navbar/Navbar';
import Logo from './Logo/Logo';
import classes from './Header.css';
import Aux from '../../hoc/Ax';

const Header = (props) => {
    return(
        <Aux>

            <header className={classes.Header}>

                <div onClick={props.toggleDrawer} className={classes.MenuButton}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>

                <div>
                    <Logo/>
                </div>

                <h1>Darakshan Mughal</h1>

                <nav className={classes.DesktopOnly}>
                    <Navbar/>
                </nav>

            </header>

        </Aux>
    )
};

export default Header;