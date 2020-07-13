import styled from 'styled-components'

export const StyledCButton = styled.button`

    background-color: transparent;
    border: none;
    color: white;
    outline: none;
    cursor: pointer;
    font: inherit;
    padding: 10px;
    margin: 10px;
    font-weight: bold;


    &:first-of-type {
        margin-left: 0;
        padding-left: 0;
    }

`

export const StyledSuccessButton = styled(StyledCButton)`
    color: #5C9210;
`

export const StyledDangerButton = styled(StyledCButton)`
    color: #944317;
`

export const StyledMenuButton = styled(StyledCButton)`
    height: 100%;
    background-color: #8F5C2C;
    border-bottom: 4px solid #40A4C8;
    color: white;

    &:first-of-type {
        padding: 10px;
    }
`