import React from 'react';
import styled from 'styled-components'

const StyledDrawerToggle = styled.div`

    position: relative;
    display: inline-block;
    cursor: pointer;
    z-index: 201;
    
  
  .bar1, .bar2, .bar3 {
    width: 33px;
    height: 4px;
    background-color: ${props => props.state ? '#fff' : '#ddd'};
    margin: 7px 0;
    transition: 0.5s;
  }
  
  
  .bar1 {
    -webkit-transform: ${props => props.state ? 'rotate(-45deg) translate(-9px, 6px)' : null};
    transform: ${props => props.state ? 'rotate(-45deg) translate(-9px, 6px)': null};
  }
  
  .bar2 {opacity: ${props => props.state ? '0': null};}
  
  .bar3 {
    -webkit-transform: ${props => props.state ? 'rotate(40deg) translate(-8px, -8px)' : null};
    transform: ${props => props.state ? 'rotate(40deg) translate(-8px, -8px)' : null};
  }
`

function DrawerToggle(props) {
    return (
        <StyledDrawerToggle state={props.state} onClick={props.clicked}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </StyledDrawerToggle>
    );
}

export default DrawerToggle;