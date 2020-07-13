import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import BuildControl from './BuildControl/BuildControl'

BuildControls.propTypes = {

};

const StyledDiv = styled.div`
    width: 100%;
    background-color: #CF8F2E;
    display: flex;
    flex-flow: column;
    align-items: center;
    box-shadow: 0 2px 1px #ccc;
    margin: auto;
    padding: 10px 0;

`

const StyledOrderButton = styled.button`
    background-color: #DAD735;
    outline: none;
    cursor: pointer;
    border: 1px solid #966909;
    color: #966909;
    font-family: inherit;
    font-size: 1.2em;
    padding: 15px 30px;
    box-shadow: 2px 2px 2px #966909;

    &:hover, &:active {
        background-color: #A0DB41;
        border: 1px solid #966909;
        color: #966909;
    }

    &:disabled {
        background-color: #C7C6C6;
        cursor: not-allowed;
        border: 1px solid #ccc;
        color: #888888;
    }
    
    &:not(:disabled) {
        animation: enable 0.5s linear;
    }
    
    @keyframes enable {
        0% {
            transform: scale(1);
        }
        60% {
            transform: scale(1.1);
        }
        100% {
            transform: scale(1);
        }
    }
`

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
]

function BuildControls(props) {
    return (
        <StyledDiv>
            <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
            {controls.map((ctrl) => (
                <BuildControl
                    key={ctrl.label}
                    label={ctrl.label}
                    addIngredient={() => props.addIngredient(ctrl.type)}
                    removeIngredient={() => props.removeIngredient(ctrl.type)}
                    disabled={props.disabled[ctrl.type]} />
            ))}
            <StyledOrderButton 
                disabled={!props.disabledCheckout}
                onClick={props.confirmButton}>ORDER NOW!</StyledOrderButton>
        </StyledDiv>
    );
}

export default BuildControls;