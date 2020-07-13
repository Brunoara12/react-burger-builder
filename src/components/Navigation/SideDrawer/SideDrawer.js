import React from 'react';
import styled from 'styled-components'

import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import Backdrop from '../../UI/Backdrop/Backdrop'

const StyledSideDiv = styled.div`
    position: fixed;
    width: 280px;
    max-width: 70%;
    height: 100%;
    left: 0;
    top: 56px;
    z-index: 200;
    background-color: white;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform .4s ease-out;

    @media (min-width: 500px) {
        display: none;
    };

    
    transform: ${props => (props.state ? 'translateX(0)' : 'translateX(-100%)')};
`


const SideDrawer = (props) => {
    return (
        <React.Fragment>
            <Backdrop show={props.state} hide={props.toggle} />
            <StyledSideDiv state={props.state}>
                <Logo height={9} Style={{
                    height: '9',
                    margin: '32px'
                }} />
                <nav>
                    <NavigationItems> </NavigationItems>
                </nav>
            </StyledSideDiv>
        </React.Fragment>
    );
}

export default SideDrawer;