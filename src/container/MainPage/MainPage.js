import React, { Component } from 'react';
import classes from './MainPage.css';
import BasicInfo from '../../components/BasicInfo/BasicInfo';
import MyDp from '../../assests/dp.jpg';
import Aux from '../../hoc/Ax';


class MainPage extends Component{

    render(){
        return(
            <Aux>

                <div className={classes.MainPage}>

                    <img src={MyDp} alt="My Dp"/>

                    <BasicInfo >
                        <p>Hi! I'm Darakshan. I'm a software developer based in Karachi.</p>
                        <p>I started from PHP and now i expand my experience to Javascript.
                            I currently building projects in React and this is one of them.</p>
                        <p style={{textAlign: 'left'}}>​Outside of code, I like travelling, baking, watching movies and I also like to play games</p>
                        <p>Previously, I was working as a web developer in Fly Mashriq Company</p>
                        <p>I also hold a degree in Statistics from the Federal Urdu University Karachi.</p>
                    </BasicInfo>
                </div>

            </Aux>
        )

    }
}

export default MainPage;