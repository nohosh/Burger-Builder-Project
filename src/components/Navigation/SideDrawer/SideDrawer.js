import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';

import classes from './SideDrawer.css';


const sideDrawer = (props) => {
    let attachedClass = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClass = [classes.SideDrawer, classes.Open]
    }
    
    return (
        <>
            <BackDrop show={props.open} clicked={props.closed}/>
            <div className={attachedClass.join(' ')}>
                <div className={classes.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems />
                </nav>

            </div>
        </>
    );
};

export default sideDrawer;