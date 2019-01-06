import React,{Component} from 'react';

import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    // constructor (props) {
    //     super(props);
    //     this.state ={...}
    // } ***can be used like this , but in modern syntax use state directly***
    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        }
    }
    
    render () {
        return (
            <>
                <Burger ingredients={this.state.ingredients}></Burger>
                <BuildControls />
            </>
        );
    }
}

export default BurgerBuilder; 