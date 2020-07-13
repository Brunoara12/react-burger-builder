import React from 'react';
import styled from 'styled-components'

import NavigationItems from '../NavigationItems/NavigationItems'
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle'

import Logo from '../../Logo/Logo'
import {StyledMenuButton} from '../../../styled-components/StyleButton'


const StyledToolbar = styled.header`
    height: 56px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #703B09;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;

    nav {
        height: 100%;
    }
`
const StyledDesktopOnly = styled.nav`
    @media(max-width: 499px) {
        display: none;
    }
`

function Toolbar(props) {
    return (
        <StyledToolbar>
            <DrawerToggle state={props.state} clicked={props.showSide}>MENU</DrawerToggle>
            <Logo height={85} Style={{
                height: '85',
                margin: 'test'
            }}/>
            <StyledDesktopOnly>
                <NavigationItems/>
            </StyledDesktopOnly>
        </StyledToolbar>
    );
}

export default Toolbar;