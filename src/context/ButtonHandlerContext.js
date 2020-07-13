import React from 'react'

const ButtonHandlerContext = React.createContext({
    addIngredient: () => {},
    removeIngredient: () => {}
})

export default ButtonHandlerContext