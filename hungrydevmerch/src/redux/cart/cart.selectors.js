import {createSelector} from 'reselect'

//state) => state.reducerProp
const selectCart = (state) => state.cart;

export const selectCartItems 
            = createSelector([selectCart],
            cart => cart.cartItems);

export const selectCartHidden 
                = createSelector([selectCart],
                    cart => cart.hidden);

export const selectCartItemsCount
         = createSelector([selectCartItems],
            cartItems => cartItems.reduce((total, current)=> {
                return total + current.quantity
              },0))

                                            