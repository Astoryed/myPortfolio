import React, {Component} from 'react';
import Aux from '../../hoc/Ax';
import Header from '../Header/Header';
import SideDrawer from "./SideDrawer/SideDrawer";
import classes from './Layout.css';

class Layout extends Component{
    state = {
        showSideDrawer: false,
        backdrop: false
    };

    sideDrawerClose=()=>{
        this.setState({showSideDrawer:false, backdrop: false});
    };

    sideDrawerToggle=()=>{
        this.setState({showSideDrawer:true, backdrop: true});
    };

    hideBackdrop =() =>{
        this.setState({backdrop: false, showSideDrawer: false})
    };

    render(){
        return (
            <Aux>
                <Header toggleDrawer={this.sideDrawerToggle}/>

                <SideDrawer open={this.state.showSideDrawer}
                            closed={this.sideDrawerClose}
                            showBackdrop={this.state.backdrop}
                            hideBackdrop={this.hideBackdrop}/>

                <main className={classes.Content}>
                    {this.props.children}
                </main>



            </Aux>
        )
    }
}


export default Layout;