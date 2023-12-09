import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [ fav, setFav ] = useState([])

    const addToCart = (item) => {
        const existingItemIndex = cartItems.findIndex((cartItem)=> cartItem.id === item.id )
        setCartItems([...cartItems,{ ...item, quantity:1}]);
        console.log("------------------added-------------------", cartItems)
    };

    const removeFromCart = (itemId) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCart);
    };

    const addToFav = (item) => {
        setFav([...fav, item])
    }

    const removeFromFav = (itemId) => {
        const updatedFav = fav.filter((item)=> item.id !== itemId);
        setFav(updatedFav)
    }

    return (
        <CartContext.Provider value={{ cartItems, fav, addToCart, removeFromCart, addToFav, removeFromFav }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
