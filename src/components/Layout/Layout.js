import React,{ Component } from 'react';

import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
import classes from './Layout.css';
import { relative } from 'path';

class Layout extends Component {

    state = {
        showSideDrawer: true
    }
    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false});
    }
    render () {
        return (
            <>
                <Toolbar/>
                <SideDrawer 
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloseHandler}/>
                <main className={classes.Content}>
                {this.props.children}
                </main>
            </>
        )
    }
}

export default Layout; 