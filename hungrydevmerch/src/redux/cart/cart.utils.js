export const addItemToCart = (cartItems, itemToAdd) => {
    const findItemInCart = cartItems.find(item => item.id === itemToAdd.id);

    if (findItemInCart) {
        const newCartItems = cartItems.map(item => {
            if (item.id === itemToAdd.id) {
                return { ...item, quantity: ++item.quantity }
            }

            return item;
        })
        return newCartItems
    }
    else {
        return [...cartItems, { ...itemToAdd, quantity: 1 }]
    }
}

export const subtractItemFromCart = (cartItems, itemToRemove) => {
    const findItemInCart = cartItems.find(item => item.id === itemToRemove.id)
    if (findItemInCart.quantity === 1) {
        return cartItems.filter(item => item.id !== itemToRemove.id)
    }

    return cartItems.map(item => 
        item.id === itemToRemove.id ? 
        { ...item, quantity: item.quantity - 1 }
            : item
    )
}