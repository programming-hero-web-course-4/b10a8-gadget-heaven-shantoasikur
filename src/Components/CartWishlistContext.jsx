import React, { createContext, useState, useContext } from 'react';

const CartWishlistContext = createContext();

export const useCartWishlist = () => useContext(CartWishlistContext);

export const CartWishlistProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishlistItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const addToWishlist = (product) => {
        setWishlistItems((prevItems) => [...prevItems, product]);
    };

    const removeFromCart = (id) => {
        setCartItems((prevItems) => prevItems.filter(item => item.product_id !== id));
    };

    const removeFromWishlist = (id) => {
        setWishlistItems((prevItems) => prevItems.filter(item => item.product_id !== id));
    };

    const sortedCartItems = [...cartItems];
    const sortedWishlistItems = [...wishlistItems];

    return (
        <CartWishlistContext.Provider value={{ cartItems: sortedCartItems, wishlistItems: sortedWishlistItems, addToCart, addToWishlist, removeFromCart, removeFromWishlist, clearCart }}>
            {children}
        </CartWishlistContext.Provider>
    );
};