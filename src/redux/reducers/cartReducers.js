import React from 'react'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cartActions';

const initialState = {
    cart: [],
    products: []
}

const cartReducers = (state = initialState, action) => {
  switch(action.type) {

    case ADD_TO_CART: {
        // return {
        //     cart: [...state.cart, action.id]
        // }
        const newId = action.id;
        const newCart = [...state.cart, newId]
        return {
            cart: newCart
        };
    }

    case REMOVE_FROM_CART: {
        const removeId = action.id;
        const remainingCart = state.cart.filter((item) => item !== removeId)
        return {
            cart: remainingCart
        };
    }

    default: {
        return state;
    }
  }
}

export default cartReducers