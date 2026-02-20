// Cart utility functions for localStorage

export const getCart = () => {
    try {
        const cart = localStorage.getItem('cart');
        return cart ? JSON.parse(cart) : [];
    } catch (error) {
        console.error('Error getting cart:', error);
        return [];
    }
};

export const addToCart = (product, quantity = 1) => {
    try {
        const cart = getCart();
        const existingItem = cart.find(item => item.id === product.id);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                ...product,
                quantity: quantity
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        return cart;
    } catch (error) {
        console.error('Error adding to cart:', error);
        return getCart();
    }
};

export const removeFromCart = (productId) => {
    try {
        const cart = getCart();
        const updatedCart = cart.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
    } catch (error) {
        console.error('Error removing from cart:', error);
        return getCart();
    }
};

export const updateCartItemQuantity = (productId, quantity) => {
    try {
        const cart = getCart();
        const updatedCart = cart.map(item => 
            item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
        );
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
    } catch (error) {
        console.error('Error updating cart:', error);
        return getCart();
    }
};

export const clearCart = () => {
    try {
        localStorage.removeItem('cart');
        return [];
    } catch (error) {
        console.error('Error clearing cart:', error);
        return [];
    }
};

export const getCartTotal = () => {
    const cart = getCart();
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};

export const getCartItemCount = () => {
    const cart = getCart();
    return cart.reduce((count, item) => count + item.quantity, 0);
};
