import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const StyledDiv = styled.div`
    width: 100%;
    margin: auto;
    height: 250px;
    overflow: scroll;
    text-align: center;
    font-weight: bold;
    font-size: 1.2rem;

    ::-webkit-scrollbar {
        width: 12px;
    }
    ::-webkit-scrollbar-thumb {
        background: #CF8F2E;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #7f3608;
    }

    @media(min-width: 500px) and (min-height: 400px) {
        width: 350px;
        height: 300px;
    }

    @media(min-width: 500px) and (min-height: 401px) {
        width: 450px;
        height: 400px;
    }

    @media(min-width: 1000px) and (min-height: 700px) {
        width: 700px;
        height: 600px;
    }
`

const Burger = props => {

    let ingredientsArray = Object.keys(props.ingredients)
        .map(ing => {
            return [...Array(props.ingredients[ing])]
                .map( ( _, i) => {
                    return <BurgerIngredient key={ing + i} ingredientType={ing} />
                })
        }).reduce((arr, el) => {
            return arr.concat(el)
        }, [])
    
    if(ingredientsArray.length === 0) {
        ingredientsArray = <p>Please Start Adding Ingredients!</p>
    }
    

    return (
        <StyledDiv>
            <BurgerIngredient ingredientType="bread-top" />
            {ingredientsArray}
            <BurgerIngredient ingredientType="bread-bottom" />
        </StyledDiv>
    );
};

Burger.propTypes = {
    
};

export default Burger;