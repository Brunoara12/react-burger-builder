import React, { Component } from 'react';

import { StyledSuccessButton, StyledDangerButton } from '../../../styled-components/StyleButton'

class OrderSummary extends Component {
    
    componentDidUpdate() {
        console.log('[OrderSummary.js] DidUpdate')
    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map((ing) => {
            return (
                <li key={ing}>
                    <span style={{ textTransform: 'capitalize' }}>{ing}</span>: {this.props.ingredients[ing]}
                </li>
            )
        })

        return (
            <React.Fragment>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Your total for this Burger is: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <StyledDangerButton onClick={this.props.hide}>Cancel</StyledDangerButton>
                <StyledSuccessButton onClick={this.props.continue}>Continue</StyledSuccessButton>
            </React.Fragment>
        );
    }
}

export default OrderSummary 