import React from 'react';
import Logo from '../../Header/Logo/Logo';
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Ax';
import Navbar from "../../Header/Navbar/Navbar";
import Backdrop from '../Backdrop/Backdrop';


const SideDrawer =(props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if(props.open){
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>

            <Backdrop show={props.showBackdrop} clicked={props.hideBackdrop}/>

            <div className={attachedClasses.join(' ')} onClick={props.closed}>

                <div>

                    <div style={{backgroundColor: '#f5f5f5', paddingLeft: '100px'}}>
                        <Logo/>
                    </div>

                    <nav>
                        <Navbar/>
                    </nav>

                </div>
            </div>
        </Aux>
    )

};

export default SideDrawer;