import React from 'react';
import styled from 'styled-components'

import burgerLogo from '../../assets/images/burger-logo.png'

const StyledLogo = styled.div`
   background-color: white;
   padding: 4px; 
   height: ${props => props.Style["height"]}%;
   margin-bottom: ${props => props.Style["margin"]};
   box-sizing: border-box;
   border-radius: 5px;

   img {
       height: 100%;
   }
`
const Logo= (props) => {
    if(props.Style === undefined)
    {
        console.log("YUP")
    }
       

    return (
        <StyledLogo Style={props.Style}>
           <img src={burgerLogo} alt="MyBurger"/> 
        </StyledLogo>
    );
}

export default Logo;