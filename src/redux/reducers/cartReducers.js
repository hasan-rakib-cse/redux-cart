import React from 'react'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

const initialState = {
    cart: [],
    products: [
        {id: 1, name: 'Lenovo Laptop'},
        {id: 2, name: 'Asus Laptop'},
        {id: 3, name: 'Dell Laptop'},
        {id: 4, name: 'Hp Laptop'},
        {id: 5, name: 'Toshiba Laptop'},
    ]
}

const cartReducers = (state = initialState, action) => {
    switch(action.type) {

        case ADD_TO_CART: {
            const newItem = {
                productId: action.id,
                name: action.name,
                cartId: state.cart.length + 1
            }
            const newCart = [...state.cart, newItem]
            return {
                ...state, cart: newCart,
            };
        }

        case REMOVE_FROM_CART: {
            const cartId = action.cartId;
            const remainingCart = state.cart.filter((item) => item.cartId !== cartId)
            return {
                ...state, cart: remainingCart
            };
        }

        default: {
            return state;
        }
    }
}

export default cartReducers