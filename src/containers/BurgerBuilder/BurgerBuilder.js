import React,{Component} from 'react';

import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {
    // constructor (props) {
    //     super(props);
    //     this.state ={...}
    // } ***can be used like this , but in modern syntax use state directly***
    state = {
        ingredients: {
            salad: 1,
            meat: 2,
            cheese: 2,
            bacon: 1
        }
    }
    
    render () {
        return (
            <>
                <Burger ingredients={this.state.ingredients}></Burger>
                <div>Burger Controls</div>
            </>
        );
    }
}

export default BurgerBuilder; 