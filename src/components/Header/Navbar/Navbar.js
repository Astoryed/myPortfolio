import React from 'react';
import Aux from '../../../hoc/Ax';
import classes from './Navbar.css';
import NavbarItems from './NavbarItems/NavbarItems';

const Navbar = () => {
    return(
       <Aux>
           <div>
               <ul className={classes.Navbar}>
                   <NavbarItems link="/" exact>Home</NavbarItems>
                   <NavbarItems link="/skills">Skills</NavbarItems>
                   <NavbarItems link="/resume">Resume</NavbarItems>
                   <NavbarItems link="/portfolio">Portfolio</NavbarItems>
                   <NavbarItems link="/contact">Contact</NavbarItems>
               </ul>
           </div>


       </Aux>
    )
};

export default Navbar;