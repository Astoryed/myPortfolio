import React from 'react';
import classes from './BasicInfo.css';

const BasicInfo = (props) => {
    return(
        <div className={classes.BasicInfo}>{props.children}</div>
    )
};

export default BasicInfo;