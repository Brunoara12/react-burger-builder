import React, { Component } from 'react'

import styled from 'styled-components'

import Toolbar from '../../components/Navigation/Toolbar/Toolbar'
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

const StyledMain = styled.main`
    margin-top: 72px;

`

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerToggleHandler = () => {
        this.setState( (prevState) =>{
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render() {
        return (
            <React.Fragment>
                <Toolbar state={this.state.showSideDrawer} showSide={this.sideDrawerToggleHandler}/>
                <SideDrawer 
                    state={this.state.showSideDrawer} 
                    toggle={this.sideDrawerToggleHandler}/>
                <StyledMain>
                    {this.props.children}
                </StyledMain>
            </React.Fragment>
        )
    }
}

export default Layout