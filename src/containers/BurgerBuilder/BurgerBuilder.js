import React, { Component } from 'react'
import axios from '../../axios-orders'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import WithErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler'

import ButtonHandlerContext from '../../context/ButtonHandlerContext'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerBuilder extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ingredients: null,
            totalPrice: 4,
            isReadyForCheckout: false,
            isInOrderConfirm: false,
            loading: false,
            error: false
        }
    }

    componentDidMount() {
        axios.get('/ingredients.json')
            .then((res) => {
                this.setState({
                    ingredients: res.data
                })
                console.log(res)
            }).catch(e => {this.setState({error: true})})
    }
    updatePurchaseState(ingredients) {


        const sum = Object.keys(ingredients)
            .map(ing => {
                return ingredients[ing]
            }).reduce((sum, el) => {
                return sum + el
            }, 0)
        this.setState({
            isReadyForCheckout: sum > 0
        })

    }

    addIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1

        const ingredients = { ...this.state.ingredients }
        ingredients[type] = updatedCount
        const priceAddition = INGREDIENT_PRICES[type]

        this.setState((prevState, props) => {
            return {
                ingredients: ingredients,
                totalPrice: prevState.totalPrice + priceAddition
            }
        })

        this.updatePurchaseState(ingredients)
    }

    removeIngredientHandler = (type) => {
        let oldCount = this.state.ingredients[type]
        if (oldCount > 0) {
            const updatedCount = oldCount - 1

            const ingredients = { ...this.state.ingredients }
            ingredients[type] = updatedCount
            const priceDeduction = INGREDIENT_PRICES[type]

            this.setState((prevState, props) => {
                return {
                    ingredients: ingredients,
                    totalPrice: prevState.totalPrice - priceDeduction
                }
            })

            this.updatePurchaseState(ingredients)
        }
    }

    confirmHandler = () => {
        this.setState({ isInOrderConfirm: true })
    }

    hideConfirmHandler = () => {
        this.setState({ isInOrderConfirm: false })
    }

    continueConfirmHandler = () => {
        //alert('You continue!')
        this.setState({ loading: true })
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'Bruno R',
                address: {
                    street: 'TESTSTREET',
                    zipCode: '41232',
                    country: 'United States'
                },
                email: 'test@bskd.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false, isInOrderConfirm: false })
                console.log(response)
            }).catch(e => {
                this.setState({ loading: false, isInOrderConfirm: false })
                console.log(e)
            })
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        }
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        let ModalContent = null

        let BurgerContent = this.state.error ? <p>Error Loading Ingredients, try Again Later :( </p> : <Spinner />

        if (this.state.ingredients) {
            BurgerContent = (
                <React.Fragment>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        addIngredient={this.addIngredientHandler}
                        removeIngredient={this.removeIngredientHandler}
                        confirmButton={this.confirmHandler}
                        disabled={disabledInfo}
                        price={this.state.totalPrice}
                        disabledCheckout={this.state.isReadyForCheckout} />
                </React.Fragment>
            )

            ModalContent = <OrderSummary
            ingredients={this.state.ingredients}
            hide={this.hideConfirmHandler}
            continue={this.continueConfirmHandler}
            price={this.state.totalPrice} />
        }

        if (this.state.loading) {
            ModalContent = <Spinner />
        }

        return (
            <React.Fragment>
                <Modal show={this.state.isInOrderConfirm} hide={this.hideConfirmHandler}>
                    {ModalContent}
                </Modal>
                {BurgerContent}
            </React.Fragment>
        )
    }
}

export default WithErrorHandler(BurgerBuilder, axios)