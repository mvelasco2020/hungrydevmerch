import './cart.scss'

import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-Item'

import React from 'react'

import { connect } from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors'

const Cart = ({ cartItems }) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.map((cartItem) => {
                        return <CartItem key={cartItem.id} item={cartItem}/>
                    })
                }
            </div>
            <CustomButton>Check Out</CustomButton>
        </div>
    )
}
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(Cart)
