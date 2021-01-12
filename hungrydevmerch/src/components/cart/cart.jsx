import './cart.scss'

import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-Item'

import React from 'react'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'

const Cart = ({ cartItems, history }) => {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.length ? (
                        cartItems.map((cartItem) => {
                            return <CartItem key={cartItem.id} item={cartItem} />
                        })
                    )
                        : (<span className='empty-message'>Your cart is empty</span>)
                }
            </div>
            <CustomButton
                onClick={() => history.push('/checkout')}>
                Check Out
            </CustomButton>
        </div>
    )
}
const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(Cart))
