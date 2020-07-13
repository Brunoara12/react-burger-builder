import React from 'react';
import styled from 'styled-components'

const StyledNavigationItem = styled.li`
    
    margin: 10px 0;
    box-sizing: border-box;
    display: block;
    width: 100%;

    a {
        color: #8F5C2C;
        text-decoration: none;
        width: 100%;
        box-sizing: border-box;
        display: block;
    }

    &:hover, &:active, .active {
        color: #40A4C8;
    }

    @media(min-width: 500px) {
        margin: 0;
        display: flex;
        align-items: center;
        height: 100%;
        width: auto;

        a {
            color: white;
            height: 100%;
            padding: 16px 10px;
            border-bottom: 4px solid transparent;
        }

        &:hover, &:active, .active {
            background-color: #8F5C2C;
            border-bottom: 4px solid #40A4C8;
            color: white;
        }
    }
`

function NavigationItem(props) {
    return (
        <StyledNavigationItem>
            <a 
                className={props.active ? "active" : null}
                href={props.link}>{props.children}</a>
        </StyledNavigationItem>
    );
}

export default NavigationItem;