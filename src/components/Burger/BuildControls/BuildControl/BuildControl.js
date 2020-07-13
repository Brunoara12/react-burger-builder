import React, { useContext } from 'react';
import styled from 'styled-components'

import ButtonHandlerContext from '../../../../context/ButtonHandlerContext'

const StyledDiv = styled.div`
    display: flex;
    justify-content: space-between;
    alight-items: center;
    margin: 5px 0;
`

const StyledButton = styled.button`
    display:block;
    font: inherit;
    padding: 5px;
    margin: 0 5px;
    width: 80px;
    border: 1px solid #AA6817;
    cursor: pointer;
    outline: none;
    
    &:disabled {
        background-color: #AC9980;
        border: 1px solid #7E7365;
        color: #ccc;
        cursor: default;
    }

    &:hover:disabled {
        background-color: #AC9980;
        color: #ccc;
        cursor: not-allowed;
    }
    
`

const StyledLessBtn = styled(StyledButton)`

    background-color: #D39952;
    color: white;

    &:hover {
        background-color: #DAA972;
        color: white;
    }

    &:active {
        background-color: #DAA972;
        color: white;
    }

`
const StyledMoreBtn = styled(StyledButton)`

    background-color: #8F5E1E;
    color: white;

    &:hover {
        background-color: #99703F;
        color: white;
    }

    &:active {
        background-color: #99703F;
        color: white;
    }
`

const StyledLabelDiv = styled.div`
    padding: 10px;
    font-weight: bold;
    width: 80px;
`

function BuildControl(props) {
    return (
        <StyledDiv>
            <StyledLabelDiv>{props.label}</StyledLabelDiv>
            <StyledLessBtn
                onClick={props.removeIngredient}
                disabled={props.disabled}>-</StyledLessBtn>
            <StyledMoreBtn onClick={props.addIngredient}>+</StyledMoreBtn>
        </StyledDiv>
    );
}

export default BuildControl;