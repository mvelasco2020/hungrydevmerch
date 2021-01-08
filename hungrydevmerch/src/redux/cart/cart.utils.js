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
        console.log('no item found')
        return [...cartItems, { ...itemToAdd, quantity: 1 }]
    }
}