import React from 'react';

import MyLogo from '../../../assests/logo.png';

import classes from './Logo.css';


const Logo =(props)=>(
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={MyLogo} alt="My Logo"/>
    </div>

);


export default Logo;