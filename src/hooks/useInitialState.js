import { useState } from 'react'

const initislState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initislState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id !== payload.id),
        })
    }
    
    return {
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState;